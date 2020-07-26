/*
|-----------------------------------------------------------------------------
| Border radius::https://tailwindcss.com/docs/border-radius
|-----------------------------------------------------------------------------
|
| Here is where you define your border radius values. If a `default` radius
| is provided, it will be made available as the non-suffixed `.rounded`
| utility.
|
| If your scale includes a `0` value to reset already rounded corners, it's
| a good idea to put it first so other values are able to override it.
|
| Class name: .rounded{-side?}{-size?}
| CSS property: border-radius
|
*/

module.exports = {
	none: '0',
	sm: '0.125rem',
	default: '0.25rem',
	md: '0.375rem',
	lg: '0.5rem',
	xl: '0.75rem',
	'2xl': '1rem',
	full: '9999px',
};
