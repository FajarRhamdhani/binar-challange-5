const path = require('path');

module.exports ={
    home : (req,res) => {
        return res.sendFile(path.join(__dirname, 'index.html'));
    },
    game : (req,res) => {
        return res.sendFile(path.join(__dirname, '/game/challange4.html'));
    },
    login:(req, res) => {
        const dummyUser = {
            "email" : "sample@dummy.com",
            "password" : "dummy123"
        }
        if(req.body.email === dummyUser.email && req.body.password === dummyUser.password){
            return res.json(
                {
                    "message" : "Login berhasil",
                    "data" : "dummyUser"
                },200
            )
        }
        return res.json(
            {
                "message" : "Password atau email salah"
            },400
        )
    }
}