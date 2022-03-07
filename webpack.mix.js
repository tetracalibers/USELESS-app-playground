const mix = require('laravel-mix')

mix
  .js('resources/frontend/index.jsx', 'public/js')
  .react()
  .sourceMaps()
  .version()

mix
  .sass('resources/frontend/app/styles/scss/styles.scss', 'public/css')
  .options({
    processCssUrls: false,
  })
  .sourceMaps()
  .version()

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.jsx'],
  },
})
