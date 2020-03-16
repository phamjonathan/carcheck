var passport = require('passport');

var db = require("../models")
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

  

    // Endpoint to login
    app.post('/login',
        passport.authenticate('local'),
        function (req, res) {
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