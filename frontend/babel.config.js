module.exports = {
    "presets": ["next/babel"],
    "plugins": [
        ["babel-plugin-styled-components", {"ssr": true}],
        ["effector/babel-plugin", {"reactSsr": true}],
    ]
}