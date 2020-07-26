import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthService from 'client/pods/auth/service';

export default class Signin extends Route {
	@service auth!: AuthService;
	async beforeModel(transition: Transition) {
		await super.beforeModel(transition);
		const claims = await this.auth.getAuthenticatedUserClaims();
		if (claims) {
			this.transitionTo('app.expense');
		}
	}
}
