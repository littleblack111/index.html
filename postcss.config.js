const cssnano = require('cssnano')
const postcssPresetEnv = require('postcss-preset-env')
const postcssWillChange = require('postcss-will-change')
const autoprefixer = require('autoprefixer')
const postcssColorRgbaFallback = require('postcss-color-rgba-fallback')
const postcssOpacity = require('postcss-opacity')
const postcssPseudoelements = require('postcss-pseudoelements')
const postcssVmin = require('postcss-vmin')
const pixrem = require('pixrem')
const doiuse = require('doiuse')

module.exports = {
    plugins: [
      cssnano({
          preset: 'default',
      }),
      postcssPresetEnv(),
      postcssWillChange(),
      autoprefixer(),
      postcssColorRgbaFallback(),
      postcssPseudoelements(),
      postcssVmin(),
      doiuse(),
    ],
};
