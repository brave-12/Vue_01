module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // es2015 是老版本写法
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
