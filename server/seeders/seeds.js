// require faker npm for seeding the data
const faker = require('faker');
// require the database from the connection
const db = require('../config/connection');
// require the models
const {Album, User} = require('../models');

db.once('open', async ()=> {
    await Album.deleteMany({});
    await User.deleteMany({});

    // create an array to hold the users
    const userData = [];

    for (let i = 0; i < 15; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();
    
        userData.push({ username, email, password });
    }
    
    const createdUsers = await User.collection.insertMany(userData);
    const userlist = Object.values(createdUsers.insertedIds)

    // create friends
    for(let i=0; i<30; i+=1){
        const randomUserIndex = Math.floor(Math.random() * userlist.length);
        const {_id: userId} = userlist[randomUserIndex];

        let friendId = userId;

        while(friendId === userId){
            const randomUserIndex = Math.floor(Math.random() * userlist.length);
            friendId = userlist[randomUserIndex];
        }

        await User.updateOne({_id: userId}, {$addToSet:{friends: friendId}});
    }

    // create the albums & photos
    // const albumData = [];
    // const photoData = [];

    // for (let i=0; i<6; i+=1){
    //     const photo = faker.image.abstract();
    //     photoData.push({photo});
    // }

    // for (let i =0; i<30; i+=1){
    //     const albumName = faker.random.words(2);

    //     const randomUserIndex = Math.floor(Math.random() * userlist.length);
    //     const { userName, _id: userId } = userlist[randomUserIndex];

    //     const createdAlbum = await Album.create({albumName, photoData, userName});

    //     const updatedUser = await User.updateOne(
    //         {_id: userId},
    //         {$push: {albums: albumData._id}}
    //     );

    //     albumData.push(albumName);
    // }

    console.log('Done Seeding the Database!');
    process.exit(0);
});