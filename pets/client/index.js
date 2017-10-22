global.Buffer = global.Buffer || require("buffer").Buffer;
var stream = require('stream')
util = require('util')
import { HTTP } from 'meteor/http';

Template.body.events({
    'submit .location' (event) {
        event.preventDefault();
        var comment_text = document.getElementById("location").value;
        alert(comment_text);
        var comment_text1 = document.getElementById("breed").value;
        alert(comment_text1);
        Meteor.call('fetchFromService', comment_text, comment_text1, function(err, respJson) {
            if (err) {
                window.alert("Error: " + err.reason);
                console.log("error occured on receiving data on server. ", err);
            } else {
                console.log("respJson: ", respJson);
                //window.alert(respJson.length + ' tweets received.');
            }
        });
    },

    'submit .breed' (event) {
        event.preventDefault();
        var comment_text = document.getElementById("location").value;
        alert(comment_text);
        var comment_text1 = document.getElementById("breed").value;
        alert(comment_text1);
        Meteor.call('fetchFromService', comment_text, comment_text1, function(err, respJson) {
            if (err) {
                window.alert("Error: " + err.reason);
                console.log("error occured on receiving data on server. ", err);
            } else {
                console.log("respJson: ", respJson);
                //window.alert(respJson.length + ' tweets received.');
            }
        });
    },

    'submit .age' (event) {
        event.preventDefault();
        var comment_text = document.getElementById("location").value;
        alert(comment_text);
        var comment_text1 = document.getElementById("breed").value;
        alert(comment_text1);
        Meteor.call('fetchFromService', comment_text, comment_text1, function(err, respJson) {
            if (err) {
                window.alert("Error: " + err.reason);
                console.log("error occured on receiving data on server. ", err);
            } else {
                console.log("respJson: ", respJson);

                //window.alert(respJson.length + ' tweets received.');
            }
        });
    },

    'submit .gender' (event) {
        event.preventDefault();
        var comment_text = document.getElementById("location").value;
        alert(comment_text);
        var comment_text1 = document.getElementById("breed").value;
        alert(comment_text1);
        Meteor.call('fetchFromService', comment_text, comment_text1, function(err, respJson) {
            if (err) {
                window.alert("Error: " + err.reason);
                console.log("error occured on receiving data on server. ", err);
            } else {
                console.log("respJson: ", respJson);
                //window.alert(respJson.length + ' tweets received.');
            }
        });
    },

    'click .button-3d' (event) {

        event.preventDefault();
        Meteor.Router.go('upload.html');

    },

    'change .file_submit' (event) {
        //prevent unwanted behavior
        event.preventDefault();
        //variable values
        //var streamBuffers = require('stream-buffers');
        var uloc = document.getElementById("ulocation").value;
        var ubre = document.getElementById("ubreed").value;
        var uages = document.getElementById("uage").value;
        var ugen = document.getElementById("ugender").value;

        var file = event.target.files[0]; //assuming 1 file only
        maxBlockSize = 256 * 1024;
        currentFilePointer = 0;
        totalBytesRemaining = 0;
        selectedFile = files[0];
        $("#output").show();
        $("#fileName").text(selectedFile.name);
        $("#fileSize").text(selectedFile.size);
        $("#fileType").text(selectedFile.type);
        var fileSize = selectedFile.size;

        if (fileSize < maxBlockSize) {
            maxBlockSize = fileSize;
            console.log("max block size = " + maxBlockSize);
        }
        totalBytesRemaining = fileSize;
        if (fileSize % maxBlockSize == 0) {
            numberOfBlocks = fileSize / maxBlockSize;
        } else {
            numberOfBlocks = parseInt(fileSize / maxBlockSize, 10) + 1;
        }
        console.log("total blocks = " + numberOfBlocks);

        reader.onload = function(event) {
            //console.log('foo', reader.result);
            var fileBuffer = new Buffer(reader.result, 'base64');

            var blob_link = Meteor.call('createBlob', fileBuffer, fileBuffer.length, function(err, json) {
                if (err) {
                    console.log("blobed errored");
                } else {
                    Meteor.call('createTable', uloc, ubre, uages, ugen, blob_link);
                }
            });

        }

        reader.readAsText(file); //read the file as arraybuffer
    }

});