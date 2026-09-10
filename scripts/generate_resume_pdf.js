import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);
  const fontBoldItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanBoldItalic);

  const PAGE_WIDTH = 595.28; // A4
  const PAGE_HEIGHT = 841.89; // A4
  const MARGIN_LEFT = 42;
  const MARGIN_RIGHT = 42;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;

  // ---------------- PAGE 1 ----------------
  const page1 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - 40;

  // Name
  const nameText = 'C M KARTHIK';
  const nameWidth = fontBold.widthOfTextAtSize(nameText, 20);
  page1.drawText(nameText, {
    x: (PAGE_WIDTH - nameWidth) / 2,
    y: y,
    size: 20,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  y -= 18;

  // Subtitle
  const subText = 'Aspiring Software Developer | Python & AI/ML Enthusiast';
  const subWidth = fontItalic.widthOfTextAtSize(subText, 11);
  page1.drawText(subText, {
    x: (PAGE_WIDTH - subWidth) / 2,
    y: y,
    size: 11,
    font: fontItalic,
    color: rgb(0.2, 0.2, 0.2),
  });
  y -= 14;

  // Contact line 1
  const contact1 = 'Bengaluru, Karnataka  •  cmkarthi2004@gmail.com  •  +91 7899443730  •  linkedin.com/in/c-m-karthik';
  const contact1Width = fontRegular.widthOfTextAtSize(contact1, 9.5);
  page1.drawText(contact1, {
    x: (PAGE_WIDTH - contact1Width) / 2,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.2, 0.2, 0.2),
  });
  y -= 13;

  // Contact line 2
  const contact2 = '•  github.com/cmkarthik2004';
  const contact2Width = fontRegular.widthOfTextAtSize(contact2, 9.5);
  page1.drawText(contact2, {
    x: (PAGE_WIDTH - contact2Width) / 2,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.2, 0.2, 0.2),
  });
  y -= 16;

  function drawSectionHeader(page, title, currentY) {
    page.drawText(title, {
      x: MARGIN_LEFT,
      y: currentY,
      size: 10.5,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    const lineY = currentY - 3;
    page.drawLine({
      start: { x: MARGIN_LEFT, y: lineY },
      end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: lineY },
      thickness: 0.75,
      color: rgb(0.65, 0.65, 0.65),
    });
    return currentY - 14;
  }

  // PROFILE SUMMARY
  y = drawSectionHeader(page1, 'PROFILE SUMMARY', y);
  const summaryText =
    'M.Sc. Data Science student and freelance full-stack developer experienced in designing, building, and deploying real-world client applications and applied AI/ML systems — spanning full-stack web development, federated learning, and cloud-based data science. Independently acquired and delivered multiple paying client engagements, owning every project end-to-end.';

  // Word wrap function
  function drawWrappedText(page, text, startX, startY, maxWidth, font, size, lineHeight, color = rgb(0.15, 0.15, 0.15)) {
    const words = text.split(' ');
    let currentLine = '';
    let currentY = startY;

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        page.drawText(currentLine, { x: startX, y: currentY, size, font, color });
        currentLine = word;
        currentY -= lineHeight;
      }
    }
    if (currentLine) {
      page.drawText(currentLine, { x: startX, y: currentY, size, font, color });
      currentY -= lineHeight;
    }
    return currentY;
  }

  y = drawWrappedText(page1, summaryText, MARGIN_LEFT, y, CONTENT_WIDTH, fontRegular, 9.2, 12.5);
  y -= 4;

  // TECHNICAL SKILLS
  y = drawSectionHeader(page1, 'TECHNICAL SKILLS', y);
  const skills = [
    { label: 'Languages: ', val: 'PHP, Python, Java, JavaScript, HTML, CSS' },
    { label: 'Frameworks & DB: ', val: 'Django, Flask, Bootstrap, JDBC, MySQL, SQL' },
    { label: 'Data & Analytics: ', val: 'Power BI, Data Analytics, Data Visualization, Excel, Google Colab' },
    { label: 'Cloud & Deployment: ', val: 'Google Cloud Platform, OCI, Hostinger, Git, GitHub, Linux, VPS Management, REST APIs' },
    { label: 'Tools & IDEs: ', val: 'VS Code, Jupyter Notebook, Google Colab, XAMPP, Postman, GitHub Desktop' },
    { label: 'AI Tools: ', val: 'ChatGPT, Google Gemini, Claude, GitHub Copilot, Genspark, Napkin AI, Gamma, Lovable' },
    { label: 'Other: ', val: 'Razorpay Integration, Requirement Analysis, Project Management, Testing & Debugging' },
  ];

  for (const s of skills) {
    page1.drawText(s.label, { x: MARGIN_LEFT, y, size: 9, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
    const labelWidth = fontBold.widthOfTextAtSize(s.label, 9);
    page1.drawText(s.val, { x: MARGIN_LEFT + labelWidth, y, size: 9, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    y -= 12.5;
  }
  y -= 4;

  // Draw bullet circle
  function drawBullet(page, bx, by, radius = 2) {
    page.drawCircle({
      x: bx,
      y: by,
      size: radius,
      color: rgb(0.2, 0.2, 0.2),
    });
  }

  // PROFESSIONAL EXPERIENCE
  y = drawSectionHeader(page1, 'PROFESSIONAL EXPERIENCE', y);
  page1.drawText('Freelance Full-Stack Developer', { x: MARGIN_LEFT, y, size: 9.5, font: fontBold });
  const dateStr = '2026 – Present';
  const dateWidth = fontItalic.widthOfTextAtSize(dateStr, 9.5);
  page1.drawText(dateStr, { x: PAGE_WIDTH - MARGIN_RIGHT - dateWidth, y, size: 9.5, font: fontItalic });
  y -= 12;

  const expBullet =
    'Delivered multiple client web applications end-to-end -- gathering requirements, building with PHP/Python (Django, Flask), JavaScript, and MySQL, deploying on Linux VPS via Git/GitHub, and integrating Razorpay payments with ongoing production support.';
  drawBullet(page1, MARGIN_LEFT + 6, y - 3, 2);
  y = drawWrappedText(page1, expBullet, MARGIN_LEFT + 14, y, CONTENT_WIDTH - 14, fontRegular, 8.8, 12);
  y -= 4;

  // PROJECTS
  y = drawSectionHeader(page1, 'PROJECTS', y);

  const projects = [
    {
      title: 'TalesTexts -- Publishing Platform',
      date: '2025 – Present',
      stack: 'Django | MySQL | Bootstrap | JavaScript | talestexts.com',
      bullet:
        'Built and deployed a publishing platform with role-based dashboards, Argon2-secured authentication, and file management on Hostinger KVM VPS.',
    },
    {
      title: 'Kriyaatmak -- Photography Studio Platform',
      date: '2026 – Present',
      stack: 'PHP | MySQL | JavaScript | Razorpay | kriyaatmak.com',
      bullet:
        'Redesigned a client photography platform with booking workflows, galleries, and Razorpay-integrated partial payments; manage ongoing deployment.',
    },
    {
      title: 'Department Website -- Government First Grade College, Yelahanka',
      date: '2026',
      stack: 'HTML | CSS | JavaScript | psychologydepartment.in',
      bullet:
        'Developed and deployed the official Department of Psychology website end-to-end, independently.',
    },
    {
      title: 'Federated Skin Disease Detection',
      date: '2026',
      stack: 'MobileNetV2 | Flower Federated Learning | Flask | GitHub: federated-skin-disease-detection',
      bullet:
        'Built a privacy-preserving federated learning system (FedAvg, Replay Buffer, Freeze Layers, Validation Gate) with a doctor-verification workflow, achieving 75.41% global federated accuracy.',
    },
    {
      title: 'Smart LPG Booking System',
      date: '2025',
      stack: 'Java | JDBC | MySQL | GitHub: AF05148725-Smart-LPG-Booking-System-JDBC',
      bullet:
        'Built a Java/JDBC console application with conditional householder-vs-commercial booking logic, address-based delivery tracking, and full CRUD operations.',
    },
    {
      title: 'DeptSync -- Academic Management System',
      date: '2024 – 2025',
      stack: 'Flask | MySQL | Python | JavaScript',
      bullet:
        'Built role-based dashboards for HODs, Staff, and Students with QR attendance, OTP verification, and multi-level leave workflows.',
    },
    {
      title: 'AI Smart Vision Assistant',
      date: '2025',
      stack: 'Flask | YOLOv8 | MySQL | Python',
      bullet:
        'Built a real-time object detection assistant with multilingual voice commands and self-learning correction.',
    },
  ];

  for (const proj of projects) {
    page1.drawText(proj.title, { x: MARGIN_LEFT, y, size: 9.2, font: fontBold });
    const pDateWidth = fontItalic.widthOfTextAtSize(proj.date, 9);
    page1.drawText(proj.date, { x: PAGE_WIDTH - MARGIN_RIGHT - pDateWidth, y, size: 9, font: fontItalic });
    y -= 11.5;

    page1.drawText(proj.stack, { x: MARGIN_LEFT, y, size: 8.5, font: fontItalic, color: rgb(0.25, 0.25, 0.25) });
    y -= 11;

    drawBullet(page1, MARGIN_LEFT + 6, y - 3, 1.8);
    y = drawWrappedText(page1, proj.bullet, MARGIN_LEFT + 14, y, CONTENT_WIDTH - 14, fontRegular, 8.5, 11);
    y -= 3;
  }

  // ---------------- PAGE 2 ----------------
  const page2 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y2 = PAGE_HEIGHT - 45;

  // CERTIFICATIONS
  y2 = drawSectionHeader(page2, 'CERTIFICATIONS', y2);

  const certLines = [
    'Oracle OCI 2025 Certified Data Science Professional -- Oracle (Oct 2025-27)  •  CSCU -- EC-Council (Nov 2025)  •  Claude Code 101 -- Anthropic (Apr 2026)  •  TechA Python Developer -- Infosys Springboard (Jan 2026)  •  Generative AI for Educators -- Google/ULSA (Jul 2025)',
    'Web Development with Django -- BITM (Jul 2024)  •  Software Testing -- Besant Technologies (Jan 2025)  •  Responsible AI for Youth (Jul 2020)  •  Digital 101 -- Future Skills Prime (Jun 2023)',
  ];

  for (const cLine of certLines) {
    y2 = drawWrappedText(page2, cLine, MARGIN_LEFT, y2, CONTENT_WIDTH, fontRegular, 9.2, 13.5);
    y2 -= 2;
  }
  y2 -= 6;

  // EDUCATION
  y2 = drawSectionHeader(page2, 'EDUCATION', y2);

  const eduItems = [
    'M.Sc. Data Science -- Dayananda Sagar University | CGPA: 7.59',
    'Bachelor of Computer Applications (BCA) -- Veerashaiva Degree College, Cantonment, Ballari | CGPA: 8.43',
    '2nd PUC (PCMB) -- Independent College | 58.68%',
    'SSLC / 10th -- Morarji School, Ramasagar, Kampli, Ballari | 81.44%',
  ];

  for (const edu of eduItems) {
    drawBullet(page2, MARGIN_LEFT + 6, y2 + 3, 2);
    page2.drawText(edu, { x: MARGIN_LEFT + 14, y: y2, size: 9.5, font: fontRegular, color: rgb(0.15, 0.15, 0.15) });
    y2 -= 15;
  }
  y2 -= 6;

  // LANGUAGES
  y2 = drawSectionHeader(page2, 'LANGUAGES', y2);
  const langText = 'English (Fluent)  •  Kannada (Fluent)  •  Hindi (Fluent)  •  Telugu (Basic)';
  page2.drawText(langText, { x: MARGIN_LEFT, y: y2, size: 9.5, font: fontRegular, color: rgb(0.15, 0.15, 0.15) });

  // Save the document
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(process.cwd(), 'public', 'resume', 'CM-Karthik-Resume-2026.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated authentic resume PDF at:', outputPath);
}

generateResumePdf().catch((err) => {
  console.error('Error generating resume PDF:', err);
  process.exit(1);
});
