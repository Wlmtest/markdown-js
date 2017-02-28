module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
        },
        "sourceType": "module"
    },
    "rules": {
        "no-redeclare": "error",
        "no-console": "off",
        "no-inner-declarations": "off",
        "no-use-before-define": "off",
        "no-undef": "off",
        "no-loop-func": "off",
        "semi": ["error", "always"],
        "func-call-spacing": ["error", "never"]
    }
};