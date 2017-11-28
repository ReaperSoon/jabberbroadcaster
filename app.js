var xmpp = require('simple-xmpp');
var prompt = require('prompt');
var optimist = require('optimist');

var recipients = [];
var message = "";

function sendMessageToRecipients() {
	console.log('Sending message to ' + recipients.length + ' recipient');
	console.log(message);
	for (var i = recipients.length - 1; i >= 0; i--) {
		recipient = recipients[i];
		xmpp.send(recipient, message);
		console.log('Message sent to ' + recipient);
	}
}

xmpp.on('online', function(data) {
	console.log('Connected with JID: ' + data.jid.user);
	sendMessageToRecipients();
});

xmpp.on('chat', function(from, message) {
	//xmpp.send(from, 'echo: ' + message);
	console.log('['+from+'] ' + message);
});

xmpp.on('error', function(err) {
	console.error(err);
});

xmpp.on('subscribe', function(from) {
	//xmpp.acceptSubscription(from);
});

//xmpp.subscribe('nisyl@smile.fr');
// check for incoming subscription requests
//xmpp.getRoster();

prompt.override = optimist.argv;
prompt.message = '';
prompt.delimiter = '';

prompt.start();

var schema = {
	properties: {
	  login: {
	  	name: 'login',
	  	description: 'Your Jabber login (ex: login@domain.com)',
	    required: true
	  },
	  password: {
	  	name: 'password',
	  	description: 'Your Jabber password',
	  	hidden: true,
	  	replace: '*',
	  	required: true
	  },
	  host: {
	  	name: 'host',
	  	description: "Your Jabber server hostname/ip",
	  	required: true,
	  	default: '195.54.62.59'
	  },
	  port: {
	  	name: 'port',
	  	description: "Your Jabber server port",
	  	required: true,
	  	default: 5222
	  },
	  recipients: {
	  	name: 'recipients',
	  	description: 'Recipient(s) (separated by comma)',
	  	required: true
	  },
	  message: {
	  	name: 'message',
	  	description: 'Enter your message',
	  	required: true
	  }
	}
};

prompt.get(schema, function (err, result) {
	if (err) {
		console.log(err.message);
		process.exit();
	}
	var login = result.login;
	var password = result.password;
	var host = result.host;
	var port = result.port;
	recipients = result.recipients.replace(/ /g,'').split(',');
	message = result.message;

	xmpp.connect({
		jid					: login,
		password			: password,
		host				: host,
		port				: port
	});
});
