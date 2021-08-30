import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    subCategories: [
      {
        type: mongoose.Mixed,
        required: false,
      },
    ],
  },
  {
    timestamp: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
