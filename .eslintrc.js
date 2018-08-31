module.exports = {
  extends: "airbnb",
  globals: {
    describe: true,
    it: true
  },
  rules: {
    "linebreak-style": [
      "error",
      process.env.NODE_ENV === "prod" ? "unix" : "windows"
    ]
  }
};
