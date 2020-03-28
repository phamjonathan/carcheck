var passport = require('passport');
var axios = require("axios");
var db = require("../models");

function apiRoutes(app) {
    // This is a example to test routing locally
    app.get("/test",function(req,res){
        res.send("hello")
    })

    console.log("app:",app)
    // Register User
    app.post('/register', function (req, res) {
        console.log(req.body)
        var newUser = new db.User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

        db.User.createUser(newUser, function (err, user) {
            if (err) throw err;
            res.send(user).end()
        });
    });

    app.get("/api/carinfo/:search", function(req,res){
        axios.get( "https://parseapi.back4app.com/classes/Carmodels_Car_Model_List",
            {
            headers: {
                'X-Parse-Application-Id': 'VDkwxt0eyRZ1DetJ2Sm4P6XU3UwPDHoEyDx3xUnI', // This is your app's application id
                'X-Parse-REST-API-Key': 'Ig1L9cuq0J9kLZKBey6g5tjYtLkegwxhmZvCxWDv', // This is your app's REST API key
              }

        }).then(function (response){
            console.log(response.data)
            res.json(response.data)
        })
    })

    // Endpoint to login
    app.post('/login',
        passport.authenticate('local'),
        function (req, res) {
            console.log("hey");
            res.send(req.user);
        }
    );

    // Endpoint to get current user
    app.get('/user', function (req, res) {
        res.send(req.user);
    })

    // Endpoint to logout
    app.get('/logout', function (req, res) {
        req.logout();
        res.send(null)
    })
}


module.exports = apiRoutes