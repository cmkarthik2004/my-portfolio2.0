import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Generating image2.png...');

const ROOT = process.cwd();
const inputPhoto = path.join(ROOT, 'public/images/myphoto.jpeg');
const outputImage = path.join(ROOT, 'public/images/image2.png');
const tmpDir = '/tmp/hero_3d';

if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir, { recursive: true });
}

// 1. Extract the person from the photo with clean alpha transparency and anti-aliased edge
console.log('1. Extracting person with anti-aliasing...');
const extractedPerson = path.join(tmpDir, 'person_alpha.png');

// Create alpha mask using floodfill from edges with fuzz
execSync(`convert "${inputPhoto}" -fuzz 6% -fill none -draw "matte 0,0 floodfill" "${path.join(tmpDir, 'raw_cutout.png')}"`);

// Refine alpha channel: extract alpha, slight blur for anti-aliasing edge, then re-composite
execSync(`convert "${path.join(tmpDir, 'raw_cutout.png')}" -alpha extract -blur 0x1.2 "${path.join(tmpDir, 'alpha_mask.png')}"`);
execSync(`convert "${inputPhoto}" "${path.join(tmpDir, 'alpha_mask.png')}" -alpha off -compose CopyOpacity -composite "${extractedPerson}"`);

console.log('Extracted person saved at:', extractedPerson);

// 2. Generate the 3D environment SVG composite
const width = 1024;
const height = 1280;

// Embed extracted person as base64 in SVG for pixel-perfect single-pass vector+raster composition
const personBase64 = fs.readFileSync(extractedPerson).toString('base64');
const personDataUri = `data:image/png;base64,${personBase64}`;

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <!-- Background Gradients -->
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.85" />
      <stop offset="35%" stop-color="#0f172a" stop-opacity="0.95" />
      <stop offset="70%" stop-color="#090d16" stop-opacity="1" />
      <stop offset="100%" stop-color="#030712" stop-opacity="1" />
    </radialGradient>

    <!-- Studio Volumetric Light Bloom (Electric Blue & Cyan) -->
    <radialGradient id="volumetricLight" cx="52%" cy="42%" r="48%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.32" />
      <stop offset="25%" stop-color="#2563eb" stop-opacity="0.22" />
      <stop offset="55%" stop-color="#1e1b4b" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
    </radialGradient>

    <!-- Secondary Soft Cyan Accent Light -->
    <radialGradient id="cyanAccentLight" cx="30%" cy="30%" r="35%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.22" />
      <stop offset="45%" stop-color="#0284c7" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
    </radialGradient>

    <!-- 3D Glass Surface Gradient -->
    <linearGradient id="glassSurface1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.14" />
      <stop offset="40%" stop-color="#e0e7ff" stop-opacity="0.06" />
      <stop offset="80%" stop-color="#38bdf8" stop-opacity="0.04" />
      <stop offset="100%" stop-color="#1e1b4b" stop-opacity="0.18" />
    </linearGradient>

    <linearGradient id="glassSurface2" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.16" />
      <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.20" />
    </linearGradient>

    <!-- Glass Rim Bevel Highlight Gradient -->
    <linearGradient id="glassBevel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.75" />
      <stop offset="30%" stop-color="#7dd3fc" stop-opacity="0.50" />
      <stop offset="70%" stop-color="#1e293b" stop-opacity="0.20" />
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.60" />
    </linearGradient>

    <!-- Glass Bevel Secondary -->
    <linearGradient id="glassBevelSec" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.65" />
      <stop offset="50%" stop-color="#818cf8" stop-opacity="0.30" />
      <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.45" />
    </linearGradient>

    <!-- 3D Geometric Floating Cube / Sphere Shading -->
    <radialGradient id="sphere3DGloss" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85" />
      <stop offset="25%" stop-color="#7dd3fc" stop-opacity="0.55" />
      <stop offset="60%" stop-color="#0284c7" stop-opacity="0.25" />
      <stop offset="90%" stop-color="#0f172a" stop-opacity="0.60" />
      <stop offset="100%" stop-color="#020617" stop-opacity="0.80" />
    </radialGradient>

    <radialGradient id="sphere3DIndigo" cx="30%" cy="28%" r="65%">
      <stop offset="0%" stop-color="#e0e7ff" stop-opacity="0.75" />
      <stop offset="30%" stop-color="#6366f1" stop-opacity="0.45" />
      <stop offset="70%" stop-color="#312e81" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#090d16" stop-opacity="0.70" />
    </radialGradient>

    <!-- Realistic Drop Shadows -->
    <filter id="deepShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="25" stdDeviation="35" flood-color="#000000" flood-opacity="0.65" />
    </filter>

    <filter id="glassShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="#000000" flood-opacity="0.45" />
    </filter>

    <filter id="softGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="30" result="blur" />
    </filter>

    <!-- Perspective Grid Pattern -->
    <pattern id="faintGrid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#38bdf8" stroke-width="0.75" stroke-opacity="0.07" />
    </pattern>

    <linearGradient id="gridFade" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
      <stop offset="35%" stop-color="#ffffff" stop-opacity="0.8" />
      <stop offset="75%" stop-color="#ffffff" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </linearGradient>

    <mask id="gridMask">
      <rect width="${width}" height="${height}" fill="url(#gridFade)" />
    </mask>

    <filter id="frostedBlur" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="1" />
    </filter>
  </defs>

  <!-- LAYER 3: BACKGROUND -->
  <!-- Base Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGlow)" />

  <!-- Subtle Perspective Studio Grid -->
  <g mask="url(#gridMask)" opacity="0.85">
    <rect width="${width}" height="${height}" fill="url(#faintGrid)" />
  </g>

  <!-- Volumetric Studio Light Bloom behind the subject -->
  <ellipse cx="512" cy="540" rx="460" ry="520" fill="url(#volumetricLight)" />
  <ellipse cx="320" cy="380" rx="300" ry="340" fill="url(#cyanAccentLight)" />

  <!-- Subtle Deep Atmosphere Vignette -->
  <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
    <stop offset="50%" stop-color="#000000" stop-opacity="0" />
    <stop offset="100%" stop-color="#020617" stop-opacity="0.55" />
  </radialGradient>
  <rect width="${width}" height="${height}" fill="url(#vignette)" />

  <!-- Subtle Floating 3D Micro-Elements (Deep Background) -->
  <g opacity="0.6">
    <!-- Floating subtle glass ring in background -->
    <circle cx="210" cy="280" r="42" fill="none" stroke="url(#glassBevel)" stroke-width="2.5" opacity="0.4" />
    <circle cx="830" cy="380" r="28" fill="none" stroke="url(#glassBevelSec)" stroke-width="2" opacity="0.35" />
    <!-- Floating subtle 3D sphere background left -->
    <circle cx="160" cy="420" r="18" fill="url(#sphere3DGloss)" filter="url(#glassShadow)" opacity="0.55" />
    <!-- Floating subtle 3D sphere background right -->
    <circle cx="870" cy="620" r="22" fill="url(#sphere3DIndigo)" filter="url(#glassShadow)" opacity="0.50" />
    <!-- Small geometric ambient accents -->
    <rect x="760" y="240" width="16" height="16" rx="4" transform="rotate(25 768 248)" fill="none" stroke="#7dd3fc" stroke-width="1.5" opacity="0.3" />
    <rect x="240" y="740" width="14" height="14" rx="3" transform="rotate(40 247 747)" fill="none" stroke="#818cf8" stroke-width="1.5" opacity="0.25" />
  </g>

  <!-- LAYER 2: MIDGROUND (Translucent 3D Architectural Glass Structures Behind Person) -->
  <g id="midground-3d-structures">
    <!-- Primary 3D Tilted Curved Glass Plaque (Asymmetric, angled, sophisticated) -->
    <!-- Soft Glass Drop Shadow onto background -->
    <g filter="url(#deepShadow)">
      <path d="M 180 340 
               C 210 240, 290 220, 520 230 
               C 750 240, 830 270, 860 380 
               C 890 500, 870 780, 830 920 
               C 790 1050, 700 1100, 480 1090 
               C 260 1080, 190 1010, 160 880 
               C 130 750, 150 440, 180 340 Z" 
            fill="#050814" opacity="0.4" />
    </g>

    <!-- Translucent Frosted Glass Body -->
    <path d="M 180 340 
             C 210 240, 290 220, 520 230 
             C 750 240, 830 270, 860 380 
             C 890 500, 870 780, 830 920 
             C 790 1050, 700 1100, 480 1090 
             C 260 1080, 190 1010, 160 880 
             C 130 750, 150 440, 180 340 Z" 
          fill="url(#glassSurface1)" 
          stroke="url(#glassBevel)" 
          stroke-width="1.75" />

    <!-- Secondary Translucent 3D Glass Ribbon / Disc (Right offset for modern asymmetry) -->
    <g transform="translate(40, -20) rotate(6 620 540)">
      <rect x="420" y="320" width="460" height="640" rx="36" 
            fill="url(#glassSurface2)" 
            stroke="url(#glassBevelSec)" 
            stroke-width="1.5" 
            opacity="0.8" 
            filter="url(#glassShadow)" />
      
      <!-- Subtle internal reflection line -->
      <line x1="450" y1="360" x2="840" y2="400" stroke="#ffffff" stroke-width="1" stroke-opacity="0.4" stroke-linecap="round" />
    </g>

    <!-- Secondary Subtle 3D Glass Pill Element (Left offset) -->
    <g transform="translate(-10, 30) rotate(-8 300 680)">
      <rect x="140" y="460" width="260" height="420" rx="32" 
            fill="url(#glassSurface1)" 
            stroke="url(#glassBevel)" 
            stroke-width="1.2" 
            opacity="0.65" 
            filter="url(#glassShadow)" />
    </g>

    <!-- Realistic Soft Shadow of Subject Cast on Midground -->
    <ellipse cx="520" cy="1060" rx="280" ry="60" fill="#000000" opacity="0.5" filter="url(#softGlowFilter)" />
  </g>

  <!-- LAYER 1: FOREGROUND (C M Karthik's Exact Portrait - 100% Authentic, Pristine) -->
  <g id="foreground-portrait">
    <!-- Soft Contact Shadow Under Person -->
    <g opacity="0.65">
      <image href="${personDataUri}" x="0" y="8" width="${width}" height="${height}" opacity="0.35" filter="url(#softGlowFilter)" />
    </g>

    <!-- Sharp Original Photograph of the Person with Natural Details, Skin, Hair, Clothing -->
    <image href="${personDataUri}" x="0" y="0" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet" />
  </g>

  <!-- LAYER 0: FOREGROUND 3D ACCENTS & REFINED VOLUMETRIC STUDIO RIM -->
  <!-- Subtle Translucent 3D Floating Glass Orb near bottom-left edge for genuine 3D parallax depth -->
  <g transform="translate(140, 940)" filter="url(#glassShadow)">
    <circle cx="0" cy="0" r="38" fill="url(#sphere3DGloss)" />
    <circle cx="0" cy="0" r="38" fill="none" stroke="url(#glassBevel)" stroke-width="1.5" />
    <!-- Specular highlight on orb -->
    <ellipse cx="-12" cy="-14" rx="14" ry="8" transform="rotate(-30 -12 -14)" fill="#ffffff" opacity="0.75" />
  </g>

  <!-- Subtle Translucent 3D Glass Capsule near bottom-right -->
  <g transform="translate(860, 980) rotate(22)" filter="url(#glassShadow)">
    <rect x="-24" y="-48" width="48" height="96" rx="24" fill="url(#sphere3DIndigo)" />
    <rect x="-24" y="-48" width="48" height="96" rx="24" fill="none" stroke="url(#glassBevelSec)" stroke-width="1.5" />
    <ellipse cx="-8" cy="-22" rx="10" ry="5" fill="#ffffff" opacity="0.65" />
  </g>

  <!-- Very subtle bottom-edge studio vignette for seamless integration into light/dark portfolio themes -->
  <linearGradient id="bottomStudioFade" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#020617" stop-opacity="0" />
    <stop offset="70%" stop-color="#020617" stop-opacity="0.35" />
    <stop offset="100%" stop-color="#020617" stop-opacity="0.75" />
  </linearGradient>
  <rect y="${height - 220}" width="${width}" height="220" fill="url(#bottomStudioFade)" />
</svg>`;

const svgPath = path.join(tmpDir, 'composite.svg');
fs.writeFileSync(svgPath, svgContent);
console.log('SVG composite created at:', svgPath);

// 3. Render high-resolution PNG using ImageMagick
console.log('Rendering SVG to final PNG...');
execSync(`convert -density 150 "${svgPath}" -quality 95 "${outputImage}"`);

console.log('Successfully generated public/images/image2.png!');
const finalStats = execSync(`identify "${outputImage}"`).toString();
console.log(finalStats);
