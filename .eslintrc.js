module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
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
        "arrow-body-style": 0,
        "arrow-parens": 0,
        "class-methods-use-this": 0,
        "eqeqeq": ["error", "always"],
        "function-paren-newline": 0,
        "import/no-named-as-default": 0,
        "import/prefer-default-export": 0,
        "indent": [
            "error", 4,
            {
                "SwitchCase": 1,
                "VariableDeclarator": 1,
                "outerIIFEBody": 1,
                "FunctionDeclaration": {
                    "parameters": 1,
                    "body": 1
                },
                "FunctionExpression": {
                    "parameters": 1,
                    "body": 1
                },
                "CallExpression": {
                    "arguments": 1
                },
                "ArrayExpression": 1,
                "ObjectExpression": 1,
                "ImportDeclaration": 1,
                "MemberExpression": 0,
                "flatTernaryExpressions": true,
                "ignoredNodes": ["JSXElement", "JSXElement *"]
            }
        ],
        "max-len": [2, 120],
        "no-else-return": 0,
        "no-multi-spaces": 0,
        "no-underscore-dangle": 0,
        "prefer-arrow-callback": 0,
        "prefer-destructuring": 0,
        "react/prefer-stateless-function": [0, { "ignorePureComponents": 1 }],
        "react/forbid-prop-types": 0,
        "react/jsx-filename-extension": 0,
        "react/no-deprecated": 2
    },
};