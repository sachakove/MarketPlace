import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
  data: Buffer,
  contentType: String,
});

const Image = mongoose.model("Image", imageSchema);

export default Image;
