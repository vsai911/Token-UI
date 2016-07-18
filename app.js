var express = require('express');
var app = express();
var emailJS = require('emailjs/email');
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/',jsonParser);

app.use(express.static(__dirname + '/public'));

app.get('/team', function(req,res){
  res.sendFile(__dirname + '/public/app/team/team.html');
});

app.get('/', function (req, res){
  res.sendFile(__dirname + '/public/app/index.html');
});

app.get('/contact', function(req,res){
  res.sendFile(__dirname + '/public/app/contact_form/contact_form.html');
});

app.get('/portfolio', function(req,res){
  res.sendFile(__dirname + '/public/app/portfolio/portfolio.html');
});

app.post('/contact-submit',function(req,res){
	var requestBody = (req.body);


	// ['veebuv@gmail.com','vnamburi92@gmail.com'].forEach(function(email){
		sendEmailTo('veebuv@gmail.com',requestBody.name,requestBody.email,requestBody.message,req,res)
	// })

  res.json({formSubmissionSuccess: true});
})

app.post('/test-api', function(req,res){
  console.log('body', req.body)
})

app.listen(PORT, function () {
  console.log('Example app listening on: ' + PORT);
});

//************NODE EMAIL
var api_key = 'key-110eb41b3bea0d31e9e327a341365aad';
var domain = 'zenkara.io';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

function sendEmailTo (email_id,client_name,client_email,message,req,res){
    var message = {
        from: "Zenkara <customer@zenkara.mailgun.org>",
        to: 'varunsai91@gmail.com',
        subject: client_name + " wants to chat with us!",
        text: "They can be reached on: " + client_email + " and they have a message : \n" + message
    };

    mailgun.messages().send(message, function (error, body) {
      console.log('error', body);
    });
}
