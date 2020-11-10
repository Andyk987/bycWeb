import Mongoose from 'mongoose';

const IntroduceSchema = new mongoose.Schema({
    text: String
}, { collection: "IntroduceText" });

const model = mongoose.model("IntroduceText", IntroduceSchema);

export default model;