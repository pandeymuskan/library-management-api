import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    genre: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author", required: true },
    publishedYear: { type: Number }
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);