import Component from '@glimmer/component';

interface Args {
	width: number;
	height: number;
}

export default class Doughnut extends Component<Args> {
	width: number = 100;
	height: number = 100;
	didInsertElement() {
		this.width = this.args.width || this.width;
		this.height = this.args.height || this.height;
	}
}
