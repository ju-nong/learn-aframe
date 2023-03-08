module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    globals: {
        AFRAME: "readonly",
    },
    extends: ["plugin:react/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "no-restricted-globals": "off",
        "react/no-this-in-sfc": "off",
    },
};
