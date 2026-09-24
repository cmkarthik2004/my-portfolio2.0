import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const tmpDir = '/tmp/build_image2_v2';
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir, { recursive: true });
}

console.log('--- Building Premium 3D Editorial Hero Visual ---');

const inputPhoto = path.join(ROOT, 'public/images/myphoto.jpeg');
const outputImage = path.join(ROOT, 'public/images/image2.png');
const outputDistImage = path.join(ROOT, 'dist/images/image2.png');
const outputRootImage = path.join(ROOT, 'public/image2.png');

const W = 1024;
const H = 1280;

// STEP 1: Extract Person with Pristine Alpha Matte
console.log('1. Isolating subject with smooth anti-aliased edge...');
const rawCutout = path.join(tmpDir, 'person_raw.png');
execSync(`convert "${inputPhoto}" -fuzz 6% -fill none -draw "matte 0,0 floodfill" -draw "matte 1023,0 floodfill" -draw "matte 0,1279 floodfill" -draw "matte 1023,1279 floodfill" "${rawCutout}"`);

const alphaMask = path.join(tmpDir, 'alpha_mask.png');
execSync(`convert "${rawCutout}" -alpha extract -blur 0x1.0 "${alphaMask}"`);

const subject = path.join(tmpDir, 'subject.png');
execSync(`convert "${inputPhoto}" "${alphaMask}" -alpha off -compose CopyOpacity -composite "${subject}"`);

// STEP 2: Realistic Subject Contact Shadow onto 3D Midground
console.log('2. Generating subject contact shadow...');
const subjectShadow = path.join(tmpDir, 'subject_shadow.png');
execSync(`convert "${subject}" \\( +clone -background "#0f172a" -shadow 55x30+10+22 \\) +swap -background none -layers merge +repage "${subjectShadow}"`);

// STEP 3: Premium Light / Off-White Studio Background with Volumetric Blue/Indigo Atmosphere
console.log('3. Rendering clean off-white studio base with soft volumetric light...');
const bgBase = path.join(tmpDir, 'bg_base.png');
// Off-white to subtle ice-slate gradient (#f8fafc to #e2e8f0)
execSync(`convert -size ${W}x${H} gradient:"#f8fafc"-"#e0e7ff" "${bgBase}"`);

// Volumetric Cyan & Indigo Studio Light Bloom behind the subject
const bloom = path.join(tmpDir, 'bloom.png');
execSync(`convert -size ${W}x${H} radial-gradient:"rgba(56,189,248,0.22)"-"rgba(224,231,255,0)" "${bloom}"`);

const indigoBloom = path.join(tmpDir, 'indigo_bloom.png');
execSync(`convert -size ${W}x${H} radial-gradient:"rgba(99,102,241,0.18)"-"rgba(248,250,252,0)" "${indigoBloom}"`);

// Very faint 3D perspective spatial grid
const grid = path.join(tmpDir, 'grid.png');
execSync(`convert -size ${W}x${H} xc:none \\
  -stroke "rgba(15,23,42,0.06)" -strokewidth 1 \\
  -draw "line 0,420 ${W},420 line 0,520 ${W},520 line 0,620 ${W},620 line 0,720 ${W},720 line 0,820 ${W},820 line 0,920 ${W},920 line 0,1020 ${W},1020 line 0,1120 ${W},1120" \\
  -draw "line 120,320 0,1280 line 280,320 180,1280 line 512,320 512,1280 line 744,320 844,1280 line 904,320 1024,1280" \\
  "${grid}"`);

const bgMerged = path.join(tmpDir, 'bg_merged.png');
execSync(`convert "${bgBase}" "${bloom}" -compose Over -composite "${indigoBloom}" -compose Over -composite "${grid}" -compose Over -composite "${bgMerged}"`);

// STEP 4: 3D Midground Translucent Glass Structures with Deep Navy / Indigo / Electric Blue Accents
console.log('4. Rendering 3D translucent glass midground elements...');

// Glass Panel 1: Primary Asymmetric 3D Tilted Card behind subject
const glassCard1 = path.join(tmpDir, 'glass_card1.png');
// Frosted glass with deep navy/indigo translucent fill and crisp cyan/white bevel highlight
execSync(`convert -size 620x780 xc:none \\
  -fill "rgba(15,23,42,0.08)" \\
  -stroke "rgba(255,255,255,0.90)" -strokewidth 2 \\
  -draw "roundrectangle 20,20 600,760 42,42" \\
  -stroke "rgba(56,189,248,0.50)" -strokewidth 1.5 \\
  -draw "roundrectangle 26,26 594,754 36,36" \\
  -stroke "rgba(99,102,241,0.30)" -strokewidth 1 \\
  -draw "line 60,60 560,110" \\
  "${glassCard1}"`);

// 3D perspective distortion (tilted in space)
const glassCard1_3D = path.join(tmpDir, 'glass_card1_3d.png');
execSync(`convert "${glassCard1}" -matte -virtual-pixel transparent \\
  -distort Perspective "0,0 40,30  620,0 580,60  620,780 550,750  0,780 70,740" \\
  \\( +clone -background "#0f172a" -shadow 60x28+12+24 \\) +swap -background none -layers merge +repage \\
  "${glassCard1_3D}"`);

// Glass Panel 2: Secondary Floating 3D Curved Glass Element (Electric Blue / Indigo accent)
const glassCard2 = path.join(tmpDir, 'glass_card2.png');
execSync(`convert -size 360x540 xc:none \\
  -fill "rgba(30,27,75,0.10)" \\
  -stroke "rgba(255,255,255,0.85)" -strokewidth 2 \\
  -draw "roundrectangle 16,16 344,524 34,34" \\
  -stroke "rgba(56,189,248,0.60)" -strokewidth 1.2 \\
  -draw "roundrectangle 22,22 338,518 28,28" \\
  -stroke "rgba(255,255,255,0.40)" -strokewidth 1 \\
  -draw "line 40,40 320,70" \\
  "${glassCard2}"`);

const glassCard2_3D = path.join(tmpDir, 'glass_card2_3d.png');
execSync(`convert "${glassCard2}" -matte -virtual-pixel transparent \\
  -distort Perspective "0,0 20,50  360,0 330,10  360,540 310,500  0,540 40,530" \\
  \\( +clone -background "#0f172a" -shadow 50x22+8+18 \\) +swap -background none -layers merge +repage \\
  "${glassCard2_3D}"`);

// Floating 3D Geometric Accents (Deep Navy Spheres with Cyan Specular Highlights)
const accents = path.join(tmpDir, 'accents.png');
execSync(`convert -size ${W}x${H} xc:none \\
  -fill "rgba(15,23,42,0.15)" -stroke "rgba(56,189,248,0.70)" -strokewidth 1.5 \\
  -draw "circle 220,380 250,380" \\
  -fill "rgba(255,255,255,0.90)" -stroke none \\
  -draw "ellipse 210,370 8,5 30,390" \\
  -fill "rgba(30,27,75,0.15)" -stroke "rgba(99,102,241,0.60)" -strokewidth 1.5 \\
  -draw "circle 840,440 864,440" \\
  -fill "rgba(255,255,255,0.85)" -stroke none \\
  -draw "ellipse 834,434 6,4 30,390" \\
  -fill none -stroke "rgba(56,189,248,0.45)" -strokewidth 1.2 \\
  -draw "roundrectangle 760,260 792,292 6,6" \\
  -fill none -stroke "rgba(99,102,241,0.40)" -strokewidth 1.2 \\
  -draw "roundrectangle 190,720 222,752 6,6" \\
  \\( +clone -background "#0f172a" -shadow 40x16+4+10 \\) +swap -background none -layers merge +repage \\
  "${accents}"`);

// Composite Midground onto Background
console.log('5. Assembling midground layer...');
const midgroundComposite = path.join(tmpDir, 'midground_composite.png');
execSync(`convert "${bgMerged}" \\
  "${glassCard1_3D}" -geometry +190+220 -composite \\
  "${glassCard2_3D}" -geometry +560+330 -composite \\
  "${accents}" -geometry +0+0 -composite \\
  "${midgroundComposite}"`);

// STEP 5: Foreground 3D Floating Glass Crystal & Final Assembly
console.log('6. Adding foreground depth and final compositing...');
const fgCrystal = path.join(tmpDir, 'fg_crystal.png');
execSync(`convert -size 140x140 xc:none \\
  -fill "rgba(255,255,255,0.20)" \\
  -stroke "rgba(255,255,255,0.95)" -strokewidth 2 \\
  -draw "roundrectangle 14,14 126,126 24,24" \\
  -stroke "rgba(56,189,248,0.60)" -strokewidth 1 \\
  -draw "line 28,28 112,42" \\
  -matte -virtual-pixel transparent \\
  -distort Perspective "0,0 15,10  140,0 120,25  140,140 105,125  0,140 25,115" \\
  \\( +clone -background "#0f172a" -shadow 50x20+6+15 \\) +swap -background none -layers merge +repage \\
  "${fgCrystal}"`);

// Subtle soft edge vignette at bottom for clean container transition
const bottomVignette = path.join(tmpDir, 'bottom_vignette.png');
execSync(`convert -size ${W}x200 gradient:"rgba(15,23,42,0)"-"rgba(15,23,42,0.40)" "${bottomVignette}"`);

// Composite All Layers
execSync(`convert "${midgroundComposite}" \\
  "${subjectShadow}" -geometry +0+0 -composite \\
  "${subject}" -geometry +0+0 -composite \\
  "${fgCrystal}" -geometry +120+920 -composite \\
  "${bottomVignette}" -geometry +0+1080 -composite \\
  -quality 95 "${outputImage}"`);

console.log('Successfully generated public/images/image2.png');

// Copy to public/image2.png
fs.copyFileSync(outputImage, outputRootImage);
console.log('Copied to public/image2.png');

// Copy to dist if exists
if (fs.existsSync(path.dirname(outputDistImage))) {
  fs.copyFileSync(outputImage, outputDistImage);
  fs.copyFileSync(outputImage, path.join(ROOT, 'dist/image2.png'));
  console.log('Copied to dist outputs');
}

const stats = execSync(`identify "${outputImage}"`).toString();
console.log('Stats:', stats);
console.log('--- 3D Visual Generation Complete ---');
