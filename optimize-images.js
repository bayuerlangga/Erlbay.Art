// optimize-images.js
// Run with: node optimize-images.js

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Root folders based on your structure
const inputRoot = path.join(__dirname, "assets", "images");
const outputRoot = path.join(__dirname, "assets", "images_optimized");

// Max width for large images (adjust if you want)
const MAX_WIDTH = 1920;

// File extensions we want to convert
const IMAGE_EXTENSIONS = [".webp", ".jpeg", ".png"];

function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function processImage(inputFile) {
  const relPath = path.relative(inputRoot, inputFile);
  const ext = path.extname(relPath);
  const baseName = path.basename(relPath, ext);
  const relDir = path.dirname(relPath);

  const outputDir = path.join(outputRoot, relDir);
  ensureDir(outputDir);

  const outputWebp = path.join(outputDir, baseName + ".webp");
  const outputAvif = path.join(outputDir, baseName + ".webp");

  console.log("Processing:", relPath);

  const image = sharp(inputFile).resize({
    width: MAX_WIDTH,
    withoutEnlargement: true,
  });

  // Create WebP
  await image
    .webp({
      quality: 78, // good balance for portfolio
    })
    .toFile(outputWebp);

  // Recreate pipeline for AVIF (sharp pipelines are one-time use)
  const imageAvif = sharp(inputFile).resize({
    width: MAX_WIDTH,
    withoutEnlargement: true,
  });

  await imageAvif
    .webp({
      quality: 45,
    })
    .toFile(outputAvif);
}

async function walkAndProcess(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      // Skip icons folder since they are mostly .ico/.svg
      if (path.relative(inputRoot, fullPath).startsWith("icon")) {
        continue;
      }
      await walkAndProcess(fullPath);
    } else if (entry.isFile() && isImageFile(entry.name)) {
      await processImage(fullPath);
    }
  }
}

async function run() {
  console.log("Input root:", inputRoot);
  console.log("Output root:", outputRoot);
  console.log("Starting optimization...");

  ensureDir(outputRoot);

  try {
    await walkAndProcess(inputRoot);
    console.log("✅ Done! Optimized images are in:", outputRoot);
  } catch (err) {
    console.error("❌ Error during optimization:", err);
  }
}

run();
