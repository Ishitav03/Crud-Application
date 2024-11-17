import mongoose from "mongoose"

const Connection= async(username,password) => {
    const URL=`mongodb://${username}:${password}@ac-ydfzt4z-shard-00-00.xwiowny.mongodb.net:27017,ac-ydfzt4z-shard-00-01.xwiowny.mongodb.net:27017,ac-ydfzt4z-shard-00-02.xwiowny.mongodb.net:27017/?ssl=true&replicaSet=atlas-8as13j-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{ 
       await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser:true});
       console.log('Database connected successfully');
    }
    catch(error){
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;