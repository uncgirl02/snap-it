// import the dependencies to use for the creating the schema for the database
const {Schema, model} = require('mongoose');

// create the schema for the photo album using the Schema constructor
const AlbumSchema = new Schema({
    // provide a name for the album
    albumName: {
        type: String
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    isPublic: {
        type: Boolean
    },
    photos: []
},
{
    toJSON: {
      getters: true
    }
  }
);

// create the model using the schema
const Album = model('Album', AlbumSchema);

// export the album model
module.exports = Album;