/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

<<<<<<< HEAD

var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var File = mongoose.model('File');

/**
 * POST /upload
 * Home page.
 */


exports.upload = function(req, res) {
	fs.readFile(req.files.file.path, function (err, data) {

		var imageName = req.files.file.name;

		// If there's an error
		if(!imageName){
			console.log("There was an error");
			res.redirect("/");
			res.end();

		} else {

		  var newPath = path.join(process.cwd(), "uploads" ,imageName);
		  /// write file to uploads/fullsize folder
		  fs.writeFile(newPath, data, function (err) {
		  	File.newFile(newPath, function(err, doc){
		  		if(err)
		  			res.send(500, err);
		  		else
		  			res.redirect("/editor/"+doc._id);
		  	});
		  });
		}
	});
};

exports.editor = function(req, res) {
  res.render('editor', 
  	{ title: 'Editor' }
  );
};
