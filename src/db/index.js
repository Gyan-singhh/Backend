import mongoose from "mongoose";

const MONGODB_URL = "mongodb://127.0.0.1:27017/youtube";

const connectDB = async () => {
    try {
        const conIns = await mongoose.connect(MONGODB_URL)
        console.log(`MongoDB connected !! DB HOST: ${conIns.connection.host}`);
    } catch (error) {
        console.log("MONGO connection Failed", error);
        process.exit(1)
    }
}
export default connectDB;



// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("error", error);
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listing on port${process.env.PORT}`)
//         })
//     } catch (error){
//         console.error("error", error)
//         throw error
//     }
// })()