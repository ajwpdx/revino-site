module.exports = {
  siteMetadata: {
    title: "revino-site",
  },
  plugins: ["gatsby-plugin-sass",
  {
    resolve: "gatsby-plugin-manifest", 
    options:{
      name: "revino-site",
      short_name: "revino",
      start_url: "/",
      background_color: '#1F2332',
      theme_color: "#1F2332",
      display: "minimal-ui",
      icon: "src/images/favicon.png"
    }
  }
  ],

};
