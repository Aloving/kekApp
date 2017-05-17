module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error"
        ],
        "linebreak-style": 0,
        "quotes": [
            "error",
            "single"
        ],
        "no-console":0,
        "semi": [
            "error",
            "always"
        ]
    }
};