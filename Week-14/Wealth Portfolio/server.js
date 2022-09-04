const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");
dotenv.config({ path: "./config.env" });
const app = require("./app");

// mongoose
//     .connect(process.env.DATABASE, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//     })
//     .then(() => console.log("connection made succesfully"));
const URI = process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
);
const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection made successfully");
    } catch (error) {
        console.error(error);
    }
};
connectDb();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port no ${port}`);
});
