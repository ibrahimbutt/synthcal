# SynthCal

A desktop calculator with a synthwave aesthetic. Made using Electron and React.

![SynthCal opened up, displaying 3.14](https://imgur.com/ztRe1VH.png)

## Installation

Download and install the latest application image from [releases](https://github.com/ibrahimbutt/synthcal/releases).

## Development Setup

Clone the repository and run `yarn` to install dependencies.

`yarn dev` will build the application for development and open up an instance of it. Changes are immediately reflected in the development instance, except those made inside the main process (`main.js`).

To create an application image, run `yarn build; yarn dist`, which will output to `dist`.

See `package.json` for all available scripts.

### `icon.png`

`icon.png` must be inside `build`, which is not commited. After the first build, create a symlink inside `build` to use `icon.png`, without having to physically put it inside `build`.

From inside the root directory:

```bash
ln -s icon.png build/icon.png
```

This way, if you need to delete `build` for whatever reason, you'll not have to think about `icon.png`.

## Acknowledgements

Designed by [Eugene Cameel](https://dribbble.com/cameel).

## License

[MIT](https://github.com/ibrahimbutt/synthcal/blob/master/LICENSE)
