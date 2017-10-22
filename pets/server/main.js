import { Meteor } from 'meteor/meteor';

var azure = require('azure-storage');
process.env.AZURE_STORAGE_ACCOUNT = "dogs"
process.env.AZURE_STORAGE_ACCESS_KEY = "uZ1bT4z6l46Y+jZHp19IEgH9lTVqhxTEcudEmVUvMNQJlx+JyWJf7EAUyOWxPAPozbDHR/lWdrz7G8xfsuRbyQ=="
var blobSvc = azure.createBlobService();
var tableSvc = azure.createTableService();

var mongoClient = require("mongodb").MongoClient;

Meteor.startup(() => {
    blobSvc.createContainerIfNotExists('mycontainer', { publicAccessLevel: 'blob' }, function(error, result, response) {
        if (!error) {
            // Container exists and allows
            // anonymous read access to blob
            // content and metadata within this container
        } else {
            console.log("ERROR");
        }
    });

    tableSvc.createTableIfNotExists('mytable', function(error, result, response) {
        if (!error) {
            // Table exists or created
        }
    });

    mongoClient.connect("mongodb://dogpets:skNocDsZL1GOfECj2EIXzmWdIQ0bY6c3iD2E944QuIzsrtl0OnSNmqFlsAuBYwRZsfIgbWggJJJWgNTsJGbZsw==@dogpets.documents.azure.com:10255/?ssl=true", function(err, db) {
        if (err) {
            console.log("error connecting to cosmos");
        } else {}
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
    //creating blob with image data
    createBlob: function(data, length) {
        blobSvc.createBlockBlobFromStream('mycontainer', 'myblob', data, length, function(error, result, response) {
            if (!error) {
                // file uploaded
                console.log(result);
                return result;
            } else {
                console.log("error from blob upload");
            }
        });
    },
    //creating table with 4 passed in values
    createTable: function(location_in, breed_in, age_in, gender_in, blob_in) {
        var entGen = azure.TableUtilities.entityGenerator;

        //the entry that we are inserting into the table
        var task = {
            Location: entGen.String(location_in),
            Breed: entGen.String(breed_in),
            Age: entGen.String(age_in),
            Gender: entGen.String(gender_in),
            Blob: endGen.String(blob_in),
        };

        tableSvc.insertEntity('mytable', task, function(error, result, response) {
            if (!error) {
                console.log("Added to table");
                // Entity inserted
            } else {
                console.log("Error Inserting into Database");
            }
        });
    }
});