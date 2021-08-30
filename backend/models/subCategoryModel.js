import mongoose from "mongoose";

const subCategorySchema = mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId || String,
      required: false,
    },
    name: { type: String, required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, required: false }],
  },
  { timestamps: true }
);

const SubCategory = mongoose.model("SubCategory", subCategorySchema);

export default SubCategory;
