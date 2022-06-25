// import the dependencies to use for the creating the schema for the database
const {Schema, model} = require('mongoose');

// create the schema for the photo album using the Schema constructor
const AlbumSchema = new Schema({
    // provide a name for the album
    albumName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    photos: []
});

// create the model using the schema
const Album = model('Album', AlbumSchema);

// export the album model
module.exports = Album;