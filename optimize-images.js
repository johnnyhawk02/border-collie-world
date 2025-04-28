const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public/images');
const optimizedDir = path.join(__dirname, 'public/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Get all image files
const imageFiles = fs.readdirSync(imagesDir)
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.webp'].includes(ext) && !file.startsWith('.');
  });

console.log(`Found ${imageFiles.length} images to optimize`);

// Process each image
const processImages = async () => {
  for (const file of imageFiles) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(optimizedDir, file.replace(/\.\w+$/, '.webp'));
    
    console.log(`Optimizing: ${file}`);
    
    try {
      await sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true }) // Resize to max width 1200px
        .webp({ quality: 80 }) // Convert to WebP format with 80% quality
        .toFile(outputPath);
      
      const inputStats = fs.statSync(inputPath);
      const outputStats = fs.statSync(outputPath);
      const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(2);
      
      console.log(`✅ ${file} → ${path.basename(outputPath)}`);
      console.log(`   Original: ${(inputStats.size / 1024 / 1024).toFixed(2)}MB`);
      console.log(`   Optimized: ${(outputStats.size / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error);
    }
  }
  
  console.log('Optimization complete!');
};

processImages(); 