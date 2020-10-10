

module.exports = {
   plugins: [
   'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `pacifico`,
          `lato\:100,400`
        ],
        display: 'swap'
      }
    }
  ]
}
