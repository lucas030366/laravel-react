const mix = require('laravel-mix');

mix
   .webpackConfig({
      resolve: {
         extensions: [".js", ".vue"],
         alias: {
            "@": __dirname + "/resources/js/projeto-react/"
         }
      }
   })

mix
   .react("resources/js/projeto-react/index.js", "public/js/react.js")
   .sass("resources/scss/app.scss", "public/css")
   .sass("resources/scss/style.scss", "public/css")

   .browserSync({
      proxy: 'localhost:8000',
      port: 3000,
      open: false
   });

