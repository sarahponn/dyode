

module.exports = {
   plugins: [
   'gatsby-plugin-styled-components',
   {
    resolve: `gatsby-plugin-webfonts`,
    options: {
      fonts: {
        google: [
          {
            family: "Lato",
            variants: ["100", "400"],
          },
          {
            family: "Pacifico",
          }
        ]
      }
    }
  }
  ]
}
