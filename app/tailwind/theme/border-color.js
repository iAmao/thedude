module.exports = theme => ({
  ...theme('colors'),
  default: theme('colors.gray.300', 'currentColor'),
})
