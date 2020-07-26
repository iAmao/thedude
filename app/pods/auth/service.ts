import Service, { inject as service } from '@ember/service';
import OktaSignIn from '@okta/okta-signin-widget';

const signInWidgetConfig = {
	logo:
		'https://res.cloudinary.com/said-death-to-passion/image/upload/v1595293103/logo_hqnmdi.svg',
	language: 'en',
	i18n: {
		en: {
			'primaryauth.title': 'Welcome back',
			'primaryauth.submit': 'Sign In',
		},
	},
	features: {
		registration: true,
		rememberMe: true,
		//multiOptionalFactorEnroll: true,  // Allow users to enroll in multiple optional factors before finishing the authentication flow.
		//selfServiceUnlock: true,          // Will enable unlock in addition to forgotten password
		//smsRecovery: true,                // Enable SMS-based account recovery
		//callRecovery: true,               // Enable voice call-based account recovery
		router: true, // Leave this set to true for the API demo
	},
	baseUrl: 'https://dev-366498.okta.com',
	clientId: '0oal9xkuy7pZFHONM4x6',
	redirectUri: 'http://localhost:4200',
	authParams: {
		issuer: 'https://dev-366498.okta.com/oauth2/auslybw5zvqgEAmrS4x6',
		responseType: ['id_token', 'token'],
		scopes: ['openid', 'email'],
	},
	idps: [
		{
			type: 'google',
			id: '0oalyqhec7LdpHY5V4x6',
		},
	],
};

const ID_TOKEN_KEY = 'o_oidc_idt';
const AX_TOKEN_KEY = 'axt';

function widgetSuccessCallback(signInWidget: any) {
	return async function (res: any) {
		var key = '';
		if (res[0]) {
			key = Object.keys(res[0])[0];
			signInWidget.authClient.tokenManager.add(key, res[0]);
		}
		if (res[1]) {
			key = Object.keys(res[1])[0];
			signInWidget.authClient.tokenManager.add(key, res[1]);
		}
		if (res.status === 'SUCCESS') {
			signInWidget.authClient.tokenManager.add(
				ID_TOKEN_KEY,
				res.tokens.idToken,
			);
			signInWidget.authClient.tokenManager.add(
				AX_TOKEN_KEY,
				res.tokens.accessToken,
			);
			window.location.reload();
		}
	};
}

function widgetErrorCallback(err: any) {
	console.log('err', err);
}

export default class Auth extends Service {
	@service router: any;

	async getAuthenticatedUserClaims() {
		const signInWidget = new OktaSignIn(signInWidgetConfig);
		try {
			const idToken = await signInWidget.authClient.tokenManager.get(
				ID_TOKEN_KEY,
			);
			return idToken ? idToken.claims : null;
		} catch (err) {
			return null;
		}
	}

	mountWidget() {
		const signInWidget = new OktaSignIn(signInWidgetConfig);
		signInWidget.renderEl(
			{ el: '#widget-container' },
			widgetSuccessCallback(signInWidget),
			widgetErrorCallback,
		);
	}
}

declare module '@ember/service' {
	interface Registry {
		auth: Auth;
	}
}
