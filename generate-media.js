/**
 * Auto-generate media lists from numbered image folders
 * Run with: `node generate-media.js`
 */

const fs = require("fs");
const path = require("path");

// === CONFIG: Add any project folders here ===
const PROJECTS = [
  {
    id: "sportbot-prop",
    folder: "assets/images/3D/sportbot/prop",
  },
  {
    id: "sportbot-char",
    folder: "assets/images/3D/sportbot/char",
  },
  {
    id: "sportbot-env",
    folder: "assets/images/3D/sportbot/env",
  },
  {
    id: "personal-project-env",
    folder: "assets/images/3D/personalwork/env",
  },
  {
    id: "personal-project-char",
    folder: "assets/images/3D/personalwork/char",
  },
  {
    id: "personal-project-prop",
    folder: "assets/images/3D/personalwork/prop",
  },
  {
    id: "personal-project-toonshading",
    folder: "assets/images/3D/personalwork/toonshading",
  },
  {
    id: "personal-project-weapon",
    folder: "assets/images/3D/personalwork/weapons",
  },
  {
    id: "personal-project-illustration",
    folder: "assets/images/3D/personalwork/illustration",
  },
  {
    id: "booya",
    folder: "assets/images/3D/booya",
  },
  {
    id: "dinobees",
    folder: "assets/images/3D/dinobees",
  },
  {
    id: "loconuts",
    folder: "assets/images/3D/loconuts",
  },
  {
    id: "motion-reels",
    folder: "assets/images/motionReels",
  },
  {
    id: "personal-project-digital-painting",
    folder: "assets/images/personalproject/digitalpainting",
  },
  {
    id: "personal-project-sketch",
    folder: "assets/images/personalproject/sketch",
  },
  // Remove duplicate sportbot-prop below
];

const output = "assets/js/generated-media.js";

function scanFolder(folder, projectId) {
  // Check if folder exists before reading
  if (!fs.existsSync(folder)) {
    console.warn(`⚠ Folder not found: ${folder}`);
    return [];
  }

  const files = fs.readdirSync(folder)
    .filter(f => f.match(/\.(png|jpg|jpeg|webp|gif)$/i))
    .sort((a, b) => {
      const numA = parseInt(a.split(/\D/)[0]) || 0;
      const numB = parseInt(b.split(/\D/)[0]) || 0;
      return numA - numB;
    });

  const media = files.map(file => ({
    id: file.split(".")[0],
    type: "image",
    src: `${folder}/${file}`,
    title: `${projectId} – ${file}`
  }));

  return media;
}

const exportData = {};

PROJECTS.forEach(({ id, folder }) => {
  const media = scanFolder(folder, id);
  if (!exportData[id]) {
    exportData[id] = [];
  }
  exportData[id].push(...media);
});

const js = `// Auto-generated. DO NOT edit manually!
// Generated: ${new Date().toISOString()}

window.GENERATED_MEDIA = ${JSON.stringify(exportData, null, 2)};
`;

fs.writeFileSync(output, js);
console.log("✔ Media generated → " + output);
