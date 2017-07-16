module.exports = {
  files: {
    javascripts: {
      joinTo: "main.js"
    },
    stylesheets: {
      joinTo: "main.css",
      order: {
        after: ["src/scss/main.css"]
      }
    }
  },
  paths: {
    public: "static",
    watched: ["src"],
  }
};
