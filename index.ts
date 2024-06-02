import dotenv from 'dotenv';
import http from 'http';
import mongoose from 'mongoose';
import app from './app';
// import {populateUser} from './populateDB';
// import {users} from './controller/UserController';
// import {populateDatabaseDog, populateDatabasePossession} from './populateDB';
// import {dogs} from './controller/DogController';
// import {possessions} from './controller/PossessionController';

const server = http.createServer(app);
dotenv.config();
const PORT = process.env.PORT || 3001;
const MONGOURI =
    process.env.MONGODB_URI ||
    'mongodb+srv://micuprinzz:test@mpp.sgdsygx.mongodb.net/?retryWrites=true&w=majority&appName=MPP';
mongoose
    .connect(MONGOURI)
    .then(() => {
        console.log('Connected to MongoDB');

        server.listen(PORT, () => {
            console.log(
                `Server is running on port http://localhost:${PORT}/api`,
            );
            //populateDatabaseDog(dogs);
            //populateDatabasePossession(possessions);
            //populateUser(users);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
