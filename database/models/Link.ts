import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILink extends Document {
  originalUrl: string;
  shortUrl: string;
  user?: mongoose.Types.ObjectId;
  clicks: number;
  createdAt: Date;
  updatedAt: Date;
}

const LinkSchema: Schema = new Schema(
  {
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    clicks: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Link: Model<ILink> =
  mongoose.models.Link || mongoose.model<ILink>("Link", LinkSchema);

export default Link;
