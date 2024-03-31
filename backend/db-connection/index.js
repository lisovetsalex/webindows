const mongoose = require("mongoose");

function connectToDB() {
    return new Promise((resolve, reject) => {
        const dbUrl = process.env.MONGODB_URL;
        mongoose.connect(dbUrl);
        const db = mongoose.connection;

        db.on("error", (err) => {
            console.error("Database connection error:", err);
            reject(err);
        });
        db.once("open", () => {
            console.log("Database connection successful");
            resolve(db);
        });
    });
}

module.exports = connectToDB;
