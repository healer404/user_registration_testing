const mongoose = require("mongoose");

module.exports = async () => {
    try{
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        };
        await mongoose.connect(
            "mongodb://localhost/user_account",
            connectionParams
        );
        console.log(
            "Connected to the database"
        );
    }catch (error){
        console.log(
            "Failed to connect to the database",
            error
        );
    }
}