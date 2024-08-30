const cssnano = require('cssnano')
const postcssWillChange = require('postcss-will-change')
// const autoprefixer = require('autoprefixer')
const postcssColorRgbaFallback = require('postcss-color-rgba-fallback')
const postcssOpacity = require('postcss-opacity')
const postcssPseudoelements = require('postcss-pseudoelements')
const postcssVmin = require('postcss-vmin')
const pixrem = require('pixrem')
const postcssFixes = require('postcss-fixes')
const rucksackCss = require('rucksack-css')
const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')

module.exports = {
    plugins: [
		cssnano({ preset: 'default' }),
		postcssWillChange(),
		// autoprefixer(),
		postcssColorRgbaFallback(),
		postcssPseudoelements(),
		postcssVmin(),
		postcssFixes(),
		rucksackCss(),
		postcssImport(),
		postcssNested(),
    ],
};
