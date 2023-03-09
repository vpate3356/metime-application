import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
        secret: process.env.NEXTAUTH_SECRET
});

// callbacks: {
//     async function signIn(user, account, profile) {
//       try {
//         await mongoClient.connect();

//         const db = mongoClient.db(process.env.MONGODB_DB);
//         const collection = db.collection('users');

//         const existingUser = await collection.findOne({ email: user.email });

//         if (existingUser) {
//           // User already exists, update any attributes here if needed
//         } else {
//           // User does not exist, create a new user document
//           const newUser = {
//             email: user.email,
//             name: user.name,
//             picture: user.image,
//             // add more attributes here if needed
//           };

//           const result = await collection.insertOne(newUser);
//           console.log(`Created new user with id ${result.insertedId}`);
//         }

//         await mongoClient.close();
//       } catch (err) {
//         console.log(err);
//       }

//       return true;
//     };
// }

// pages: {
//     newUser : '/survey'
// }