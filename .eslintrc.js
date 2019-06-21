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
        "camelcase": "on",
    },
    "env":{
      "es6": true,
    }
};
