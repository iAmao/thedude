import Component from '@glimmer/component';

interface TransactionArgs {}

const transaction = {
	id: 1,
	txType: 'transfer',
	user: {
		id: 1,
	},
	category: {
		id: 1,
		name: 'family',
		avatar: null,
		color: '#44322e',
	},
	beneficiary: {
		name: 'Jonas Strumhorn',
		avatar: null,
		description: 'Jonas, a close acquaintance of mine',
		type: 'individual',
	},
	mode: 'USSD',
	currency: 'NGN',
	card: {
		nickname: 'Master',
		cardType: 'debit',
	},
	createdAt: Date(),
};

export default class Transaction extends Component<TransactionArgs> {}
