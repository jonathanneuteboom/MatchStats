module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: '@react-native',
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': 'error',
  },
}
