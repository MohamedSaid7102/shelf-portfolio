# Welcome to my portfolio

## Techs

- Lazyloading imgaes:

  - Using [Blurhash](https://github.com/woltapp/react-blurhash). && [Blurhash React](https://github.com/woltapp/react-blurhash).

  - All [Images](./src/assets/images) are being encoded to generate hashcode corresponding to them using a script in [Preprocessing](./preprocessing.js) and it's runs every time `npm start` is called in [package.json](./package.json), then hash codes are stored in [data](./src/data/data.js) file, then it's content is being consumed in projects images.
