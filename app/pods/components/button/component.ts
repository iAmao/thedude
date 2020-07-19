import Component from '@glimmer/component';
// import { tracked } from '@glimmer/tracking';

export interface ButtonVariantMap {
	[key: string]: string;
}

export interface ButtonArgs {
	color: string;
	size: string;
}

export default class Button extends Component<ButtonArgs> {
	// @tracked color?: string;
	// @tracked size?: string;

	static getVariant(map: ButtonVariantMap, value?: string, defaultValue?: string) {
		if (value) {
			return map[value];
		}
		return defaultValue || null;
	}

	get colorVariant() {
		const colorMap: ButtonVariantMap = {
			primary: 'bg-blue-pr text-white',
		};
		const defaultValue = colorMap.primary;
		return Button.getVariant(colorMap, this.args.color, defaultValue);
	}

	get sizeVariant() {
		const sizeMap: ButtonVariantMap = {
			'xs': 'leading-6 px-6 text-xs',
			'sm': 'leading-10 px-6 text-sm',
			'md': 'leading-13 px-8 text-md',
			'lg': 'leading-16 px-12 text-lg',
		};

		const defaultValue = sizeMap.sm;
		return Button.getVariant(sizeMap, this.args.size, defaultValue);
	}
}
