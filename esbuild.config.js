require('esbuild-register');

const { build } = require('esbuild');
const { copy } = require('fs-extra');

const isProd = process.env.npm_lifecycle_event === 'build';

build({
  entryPoints: ['src/js/main.js'],
  outdir: 'public/js',
  bundle: true,
  minify: isProd ? true : false,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
})
.then(() => {
  copy('src/index.html', 'public/index.html');
})
.catch((err) => {
  console.error(err);
  process.exit(1);
});