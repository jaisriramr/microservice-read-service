const readService = require("./readService.js");

module.exports = function(params) {
    var app = params.app;
    const fs = require("fs");
    const path = require("path");
    const middleware = require("../../lib/auth/middleware.js")


    app.post("/read", middleware, async (req, res) => {
        try {

            let response = await readService.readService(req.body);
            res.status(201).json({success: true, message: response})

        }catch(err) {
            console.log("errrrr ", err)
            res.status(400).json({success: true, message: err});
        }
    })


}