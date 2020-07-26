import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class Signin extends Controller {
	@service auth: any;
}

declare module '@ember/controller' {
	interface Registry {
		signin: Signin;
	}
}
