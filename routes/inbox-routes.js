

module.exports = function (app) {
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '/../public/inbox.html'));
    })
    //display all messages
    app.get("/api/messages/all", function (req, res) {
        Message.findAll({}).then(function (results) {
            res.json(results)
        })
    });
    // new message
    app.post("/api/messages/new", function (req, res) {
        console.log("New Message: " + req.body)

        Message.create({
            from: req.body.from,
            body: req.body.body,
            post_time: req.body.post_time
        }).then(function (results) {
            res.json(results)
        });
    });
    //delete
    app.delete("/api/messages/delete/:id", function(req, res) {
        console.log("delete: " + req.body)

        Message.destroy({
            where:{
                id: req.params.id
            }
        }).then(function(Message){
            console.log('deleted message with id: ', req.params.id);
            res.json(Message)

        });

    });

};