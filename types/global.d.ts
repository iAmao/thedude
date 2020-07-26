// Types for compiled templates
declare module 'client/templates/*' {
	import { TemplateFactory } from 'htmlbars-inline-precompile';
	const tmpl: TemplateFactory;
	export default tmpl;
}

declare module 'tailwindcss/plugins/container';
declare module '@types/ember';
declare module '@okta/okta-signin-widget';
