const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = 'mongodb+srv://gofood:ikram@cluster0.yrbpqy4.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("connected");
        const client = await mongoose.connection.db;
        const collection = client.collection("food_items");
        const data = await collection.find({}).toArray();
        console.log();
    } catch (err) {
        console.log(err);
    }
};

module.exports = mongoDB;
