const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const founders = [
  {
    name: 'CS Dhaval Gohel',
    role: 'Founder | Corporate Consultant',
    initials: 'CS',
    abbr: 'DG',
    filename: 'dhaval-gohel.jpg',
    color1: '#0B1F3A',
    color2: '#16355F',
    accent: '#C9A227'
  },
  {
    name: 'CA Rahulsingh Panwar',
    role: 'Co-Founder | Tax Consultant',
    initials: 'CA',
    abbr: 'RP',
    filename: 'rahulsingh-panwar.jpg',
    color1: '#0F2648',
    color2: '#1D4ED8',
    accent: '#E5C04A'
  },
  {
    name: 'CMA Arjun Bhatt',
    role: 'Co-Founder | Accounting Consultant',
    initials: 'CMA',
    abbr: 'AB',
    filename: 'arjun-bhatt.jpg',
    color1: '#08172C',
    color2: '#1E3A8A',
    accent: '#C9A227'
  }
];

async function generate() {
  const dirs = [
    path.join(__dirname, '..', 'public', 'images', 'founders'),
    path.join(__dirname, '..', 'public', 'images', 'leadership')
  ];

  dirs.forEach(d => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });

  for (const f of founders) {
    const svg = `
      <svg width="360" height="450" viewBox="0 0 360 450" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg-${f.abbr}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${f.color1}" />
            <stop offset="100%" stop-color="${f.color2}" />
          </linearGradient>
          <radialGradient id="glow-${f.abbr}" cx="50%" cy="35%" r="45%">
            <stop offset="0%" stop-color="${f.accent}" stop-opacity="0.25" />
            <stop offset="100%" stop-color="transparent" />
          </radialGradient>
        </defs>
        
        <rect width="360" height="450" fill="url(#bg-${f.abbr})" />
        <rect width="360" height="450" fill="url(#glow-${f.abbr})" />
        
        <!-- Architectural Framing -->
        <g stroke="rgba(255,255,255,0.06)" stroke-width="1.2">
          <line x1="28" y1="0" x2="28" y2="450" />
          <line x1="332" y1="0" x2="332" y2="450" />
          <line x1="0" y1="60" x2="360" y2="60" />
          <line x1="0" y1="390" x2="360" y2="390" />
        </g>
        
        <!-- Emblem Ring -->
        <circle cx="180" cy="155" r="70" fill="none" stroke="${f.accent}" stroke-width="2" stroke-dasharray="4,3" />
        <circle cx="180" cy="155" r="64" fill="#0B1F3A" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" />
        
        <!-- Monogram Initials -->
        <text x="180" y="170" font-family="-apple-system, sans-serif" font-weight="900" font-size="42" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">
          ${f.abbr}
        </text>
        
        <!-- Credentials Pill -->
        <rect x="135" y="238" width="90" height="28" rx="14" fill="${f.accent}" />
        <text x="180" y="257" font-family="-apple-system, sans-serif" font-weight="800" font-size="13" fill="#0B1F3A" text-anchor="middle" letter-spacing="1">
          ${f.initials}
        </text>
        
        <!-- Name -->
        <text x="180" y="308" font-family="-apple-system, sans-serif" font-weight="800" font-size="19" fill="#FFFFFF" text-anchor="middle" letter-spacing="-0.3">
          ${f.name}
        </text>
        
        <!-- Role -->
        <text x="180" y="334" font-family="-apple-system, sans-serif" font-weight="600" font-size="12" fill="#CBD5E1" text-anchor="middle">
          ${f.role}
        </text>
        
        <!-- Subtext -->
        <text x="180" y="420" font-family="-apple-system, sans-serif" font-weight="700" font-size="10" fill="${f.accent}" text-anchor="middle" letter-spacing="1.5">
          THE CORPORATE HUB • ADVISORY
        </text>
      </svg>
    `;

    const buf = await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toBuffer();
    dirs.forEach(d => {
      fs.writeFileSync(path.join(d, f.filename), buf);
    });
    console.log(`Generated ${f.filename}`);
  }
}

generate().then(() => console.log('All portraits generated successfully.'));
