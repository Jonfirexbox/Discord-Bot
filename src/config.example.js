const config = {
	ownerID: ['YourAccountID'],
	token: 'YourBotToken',
	botClient: 'YourBotClientSecret',
	// This is just so some commands can be ran in DM channels
	defaultSettings: {
		// default settings
		prefix: 'o!',
		Language: 'en-US',
		plugins: ['Fun', 'Moderation', 'Misc'],
	},
	// Custom emojis, just for cosmetic (change these if you wish)
	emojis: {
		cross: ':negative_squared_cross_mark:',
		tick: ':white_check_mark:',
	},
	// URL to mongodb
	MongoDBURl: 'mongodb://link',
	// if you want debugging turned on or not
	debug: false,
};

module.exports = config;
