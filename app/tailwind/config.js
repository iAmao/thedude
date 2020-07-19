const screens = require('./theme/screen');
const colors = require('./theme/colors');
const spacing = require('./theme/spacing');
const backgroundPosition = require('./theme/background-position');
const backgroundSize = require('./theme/background-size');
const borderColor = require('./theme/border-color');
const borderRadius = require('./theme/border-radius');
const borderWidth = require('./theme/border-width');
const boxShadow = require('./theme/box-shadow');
const cursor = require('./theme/cursor');
const fill = require('./theme/fill');
const flex = require('./theme/flex');
const flexGrow = require('./theme/flex-grow');
const flexShrink = require('./theme/flex-shrink');
const fontFamily = require('./theme/font-family');
const fontSize = require('./theme/font-size');
const fontWeight = require('./theme/font-weight');
const height = require('./theme/height');
const inset = require('./theme/inset');
const letterSpacing = require('./theme/letter-spacing');
const lineHeight = require('./theme/line-height');
const listStyleType = require('./theme/list-style-type');
const margin = require('./theme/margin');
const maxHeight = require('./theme/max-height');
const maxWidth = require('./theme/max-width');
const minHeight = require('./theme/min-height');
const minWidth = require('./theme/min-width');
const objectPosition = require('./theme/object-position');
const opacity = require('./theme/opacity');
const order = require('./theme/order');
const padding = require('./theme/padding');
const placeholderColor = require('./theme/placeholder-color');
const placeholderOpacity = require('./theme/placeholder-opacity');
const space = require('./theme/space');
const stroke = require('./theme/stroke');
const strokeWidth = require('./theme/stroke-width');
const textOpacity = require('./theme/text-opacity');
const textColor = require('./theme/text-color');
const width = require('./theme/width');
const zIndex = require('./theme/z-index');
const gap = require('./theme/gap');
const gridTemplateColumn = require('./theme/grid-template-column');
const gridColumn = require('./theme/grid-column');
const gridColumnStart = require('./theme/grid-column-start');
const gridColumnEnd = require('./theme/grid-column-end');
const gridTemplateRow = require('./theme/grid-template-row');
const gridRow = require('./theme/grid-row');
const gridRowStart = require('./theme/grid-row-start');
const gridRowEnd = require('./theme/grid-row-end');
const transformOrigin = require('./theme/transform-origin');
const scale =require('./theme/scale')
const rotate = require('./theme/rotate')
const translate = require('./theme/translate')
const skew = require('./theme/skew');
const transitionProperty = require('./theme/transition-property');
const transitionTimingFunction = require('./theme/transition-timing-function')
const transitionDuration = require('./theme/transition-duration')
const transitionDelay = require('./theme/transition-delay')

module.exports = {
  purge: [],
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens,
    colors,
    spacing,
    backgroundColor: theme => theme('colors'),
    backgroundOpacity: theme => theme('opacity'),
    backgroundPosition,
    backgroundSize,
    borderColor,
    borderOpacity: theme => theme('opacity'),
    borderRadius,
    borderWidth,
    boxShadow,
    container: {},
    cursor,
    divideColor: theme => theme('borderColor'),
    divideOpacity: theme => theme('borderOpacity'),
    divideWidth: theme => theme('borderWidth'),
    fill,
    flex,
    flexGrow,
    flexShrink,
    fontFamily,
    fontSize,
    fontWeight,
    height,
    inset,
    letterSpacing,
    lineHeight,
    listStyleType,
    margin,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    objectPosition,
    opacity,
    order,
    padding,
    placeholderColor,
    placeholderOpacity,
    space,
    stroke,
    strokeWidth,
    textColor,
    textOpacity,
    width,
    zIndex,
    gap,
    gridTemplateColumn,
    gridColumn,
    gridColumnStart,
    gridColumnEnd,
    gridTemplateRow,
    gridRow,
    gridRowStart,
    gridRowEnd,
    transformOrigin,
    scale,
    rotate,
    translate,
    skew,
    transitionProperty,
    transitionTimingFunction,
    transitionDuration,
    transitionDelay,
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundOpacity: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderOpacity: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    boxSizing: ['responsive'],
    container: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    divideColor: ['responsive'],
    divideOpacity: ['responsive'],
    divideWidth: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    placeholderOpacity: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textOpacity: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    gap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
    transitionDelay: ['responsive'],
  },
  corePlugins: {},
  plugins: [],
}
