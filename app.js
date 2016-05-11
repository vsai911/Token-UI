var express = require('express');
var app = express();
var emailJS = require('emailjs/email')
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/',jsonParser);

app.use(express.static(__dirname + '/public'));

app.get('/portfolio', function(req,res){
  res.sendFile(__dirname + '/public/portfolio.html');
});

app.get('/team', function(req,res){
  res.sendFile(__dirname + '/public/team/team.html');
});

app.get('/', function (req, res) {
  res.send('root');
});

app.get('/contact', function(req,res){
  res.sendFile(__dirname + '/public/form/form.html');
});

app.post('/contact-submit',function(req,res){
	var requestBody = (req.body);
	['varunsai91@gmail.com'].forEach(function(email){
		sendEmailTo(email,requestBody.name,requestBody.email,requestBody.message,req,res)
	})

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//************NODE EMAIL
var emailJS = require('emailjs/email')

var sendmail = emailJS.server.connect({
    user: 'teamdreamstream4@gmail.com',
    password: 'teamdreamstream',
    host: "smtp.gmail.com",
    ssl: true
});

function sendEmailTo (email_id,client_name,client_email,message,req,res){
    var message = {

        from: "Zenkara <teamdreamstream4@gmail.com>",
        to: "User <" + email_id + ">",
        subject: client_name + " wants to chat with us!",
        text: "They can be reached on: " + client_email + " and they have a message : \n" + message
    };

    sendmail.send(message, function (err, message) {
        var body = null;
        if (err) {
            body = err.toString();
        } else {
            console.log("EMAIL SENT IN SERVER")
        }
    });
}
