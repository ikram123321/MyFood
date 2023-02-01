const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = 'mongodb+srv://gofood:ikram@cluster0.yrbpqy4.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("connected");
        const client = await mongoose.connection.db;
        const foodItemsCollection = client.collection("food_items");
        const foodCategoryCollection = client.collection("foodCategory");
        const foodItemsData = await foodItemsCollection.find({}).toArray();
        const foodCategoryData = await foodCategoryCollection.find({}).toArray();
        global.food_items = foodItemsData;
        global.foodCategory = foodCategoryData;
    } catch (err) {
        console.log(err);
    }
};

module.exports = mongoDB;
