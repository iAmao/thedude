import Route from '@ember/routing/route';

export default class AppIndex extends Route {
	async beforeModel(transition: Transition) {
		await super.beforeModel(transition);
		this.transitionTo('app.expense');
	}
}
