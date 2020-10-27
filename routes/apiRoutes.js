
const notes = require("../db/db.json");


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(notes);
  });

  app.post("/api/notes", function(req, res) {
    
  });

  app.delete("/api/note/:id", function(req, res) {
    
  });
};
