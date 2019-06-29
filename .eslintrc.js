module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 6,
      "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "extends": "airbnb", 
    "plugins": [
      "react",
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "camelcase": 0,
        "arrow-parens": [
          "error",
          "always"
        ],
        "linebreak-style": [
          "error",
          "windows"
        ],
        'jsx-quotes': [ 
          "error", 
          "prefer-single"
        ],
        "quotes": [
          "error",
          "single",
          {
            "avoidEscape": true,
            "allowTemplateLiterals": true
          }
        ],
    },
    "env":{
      "node": true,
      "es6": true,
    }
};
