module.exports = (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    })