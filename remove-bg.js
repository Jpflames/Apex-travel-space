const sharp = require('sharp');
const fs = require('fs');

async function removeBackground() {
  const inputPath = 'public/apex-logo.jpeg';
  const outputPath = 'public/apex-logo-transparent.png';
  
  if (!fs.existsSync(inputPath)) {
    console.log("Input file not found");
    return;
  }

  // Remove light pixels (assuming white background)
  try {
    const { data, info } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const pixelData = new Uint8ClampedArray(data.buffer);
    
    for (let i = 0; i < pixelData.length; i += 4) {
      const r = pixelData[i];
      const g = pixelData[i + 1];
      const b = pixelData[i + 2];
      
      // If the pixel is close to white, make it transparent
      if (r > 230 && g > 230 && b > 230) {
        pixelData[i + 3] = 0; // Alpha to 0
      }
    }

    await sharp(pixelData, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4,
      }
    })
    .png()
    .toFile(outputPath);
    
    console.log("Background removed successfully!");
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

removeBackground();
