import { Meteor } from 'meteor/meteor';

var azure = require('azure-storage');
process.env.AZURE_STORAGE_ACCOUNT = "dogs"
process.env.AZURE_STORAGE_ACCESS_KEY = "uZ1bT4z6l46Y+jZHp19IEgH9lTVqhxTEcudEmVUvMNQJlx+JyWJf7EAUyOWxPAPozbDHR/lWdrz7G8xfsuRbyQ=="
var blobSvc = azure.createBlobService();

var mongoClient = require("mongodb").MongoClient;

Meteor.startup(() => {
    blobSvc.createContainerIfNotExists('mycontainer', { publicAccessLevel: 'blob' }, function(error, result, response) {
        if (!error) {
            // Container exists and allows
            // anonymous read access to blob
            // content and metadata within this container
        }
        else{
            console.log("ERROR");
        }
    });
    mongoClient.connect("mongodb://dogpets:skNocDsZL1GOfECj2EIXzmWdIQ0bY6c3iD2E944QuIzsrtl0OnSNmqFlsAuBYwRZsfIgbWggJJJWgNTsJGbZsw==@dogpets.documents.azure.com:10255/?ssl=true", function(err, db) {

    });
});

Meteor.methods({
    fetchFromService: function(data, data1) {
        this.unblock();
        var url = "https://f9ij31drdl.execute-api.us-east-1.amazonaws.com/prod/myresource";
        //synchronous GET
        return HTTP.call('POST', url, {
            data: { Breedtype: data, Location: data1 }
        });
    },
    createBlob: function(data, breed) {
        blobSvc.createBlockBlobFromLocalFile('mycontainer', 'myblob', 'test.txt', function(error, result, response){
            if(!error){
              // file uploaded
              return result;
            }
            else{
                console.log("error from blob upload");
            }
          });
    }
});