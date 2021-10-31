# MINI-LIBRARY

## DESCRIPTION

A mock featherweight, ES2015-compatible JS library.

## COMPILE TYPESCRIPT TO ES2015 JAVASCRIPT

* Initialize TypeScript from the root directory:
```
tsc --init
```

* Edit `tsconfig.json` according to your needs (e.g.):
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "ESNext"],
    "module": "ESNext",
    "rootDir": "./src", /* Write your TS files here. */
    "outDir": "./js/esnext", /* They'll be compiled here. */
  }
}
```

* Initialize npm project:
```
npm init -y
```

* Install **Babel** and **TypeScript** dev dependencies. More plugins might be needed:
```
npm i -D typescript babel-cli babel-plugin-transform-es2015-spread preset-env preset-stage-0
```

* In the root directory, create a `.babelrc` file with the following contents:
```json
{
  "presets": [
    "env",
    "stage-0"
  ]
}
```

* Add this script to `package.json` and run it:
```json
{
  "build": "npx tsc && npx babel js/esnext -d js/es2015
}
```
--> Compiles TS files and adds an `es2015` directory to the JS (compiled files) directory.