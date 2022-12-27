import path from 'path';
import fs from 'fs/promises';
import { readFileSync, writeFileSync, promises as fsPromises } from 'fs';
import { encode } from 'blurhash';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import 'blurhash';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __imagesPath = 'src/assets/images';

const IMAGES_DIR_PATH = path.join(__dirname, __imagesPath);

const encodeImageToBlurhash = (path) =>
  new Promise((resolve, reject) => {
    sharp(path)
      .raw()
      .ensureAlpha()
      .resize(32, 32, { fit: 'inside' })
      .toBuffer((err, buffer, { width, height }) => {
        if (err) return reject(err);
        resolve(encode(new Uint8ClampedArray(buffer), width, height, 4, 4));
      });
  });

async function encodeAllImagesAndExportToDB() {
  const imagesNames = await fs.readdir(IMAGES_DIR_PATH);

  let data = {};

  for (const name of imagesNames) {
    const encodedHash = await encodeImageToBlurhash(
      path.join(__dirname, __imagesPath, name)
    );
    const imgPath = path.join('/', __imagesPath, name);
    data[imgPath] = { blurhash: encodedHash };
    // data.push({ imgPath, blurhash: encodedHash }); // If you uncommented this, don't forget to make data a [] not {}
  }

  data = 'export const lazyLoadingImagesData = ' + JSON.stringify(data);
  asyncWriteFile('/src/data/data.js', data);
}

async function asyncWriteFile(filename, data) {
  /**
   * flags:
   *  - w = Open file for reading and writing. File is created if not exists
   *  - a+ = Open file for reading and appending. The file is created if not exists
   */
  try {
    await fsPromises.writeFile(path.join(__dirname, filename), data, {
      flag: 'w',
    });

    const contents = await fsPromises.readFile(
      path.join(__dirname, filename),
      'utf-8'
    );

    return contents;
  } catch (err) {
    console.log(err);
    return 'Something went wrong';
  }
}

try {
  encodeAllImagesAndExportToDB();
} catch (error) {
  console.log(error);
}
