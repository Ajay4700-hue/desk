import mongoose from "mongoose";

const mongodbURI = process.env.MONGODB_URL;

if(!mongodbURI){
    throw new Error ("Database failed")
}

let cached = global.mongoose

if(!cached){
    cached=global.mongoose={conn: null, promise:null};

}

const connectDB = async ()=>{
    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise){
        cached.promise=mongoose.connect(mongodbURI).then((conn)=>conn.connection)
    }
    try {
        const conn = await cached.promise;
        return conn
    } catch (error) {
        console.error("Database connection Failed", error);
        throw error        
    }
}