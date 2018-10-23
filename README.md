# JabberBroadcaster

Jabber Broadcaster allow you to send a message using XMPP protocol to multiple recipients
No GUI, only console

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for use it.

### Prerequisites

This project is built with NodeJS

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Installing

```bash
npm install
```

## Running

```
$> nodejs app.js
Your Jabber login (ex: login@domain.com) stcoh@smile.fr
Your Jabber password ***********

Your Jabber server hostname/ip (195.54.62.59) 
Your Jabber server port (5222) 
Recipient(s) (separated by comma) stdav@smile.fr,nisyl@smile.fr
Enter your message Salut :)
Connected with JID: stcoh
Sending message to 2 recipient
Salut :)
Message sent to nisyl@smile.fr
Message sent to stdav@smile.fr
```

## Authors

* **Steve Cohen** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
