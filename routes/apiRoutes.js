const fs = require("fs");
const uuid = require("uuid");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            return res.json(notes);
        })
    });

    app.post("/api/notes", function (req, res) {
        req.body.id = uuid.v1()
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            let newNote = JSON.parse(data);
            newNote.push(req.body);
            console.log(data)
            fs.writeFile('./db/db.json', JSON.stringify(newNote), (err) => {
                if (err) throw err;
                res.json(req.body);
            });
        })
    });

    app.delete("/api/note/:id", function (req, res) {
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            if (err) throw err;
            let newNote = JSON.parse(data);
            newNote = newNote.filter(note => note.id !== req.params.id)

            fs.writeFile('./db/db.json', JSON.stringify(newNote), (err) => {
                if (err) throw err;
                res.json("Note Deleted!");
            });
        })
    });
};
