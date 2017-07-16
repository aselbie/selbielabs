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
  modules: {
    wrapper: false
  },
  paths: {
    public: "static",
    watched: ["src"]
  }
};
