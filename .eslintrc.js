module.exports = {
    "extends": [
        "airbnb",
        "react-app",
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 9,
      "sourceType": "module",
      "allowImportExportEverywhere": false,
      "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        },
    },
    "plugins": [
      "react",
      "flow",
      "flowtype",
      "import",
      "jsx-a11y",
    ],
    "env":{
      "node": true,
      "browser": true,
      "es6": true,
      "mocha": true,
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "indent": [
          "error",
          4,
        ],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "no-console": "off",
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
};
