module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'standard',//使用standard做代码规范,  
    'prettier'    
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
   
  ],
  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off',
    "prettier/prettier": "error",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
