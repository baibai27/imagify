import { Schema, model, models, Document } from "mongoose";

interface User extends Document {
  firstName?: string; // Optional since it's not marked as required
  lastName?: string; // Optional for the same reason
  email: string; // Required and must be unique
  clerkId: string; // Required and must be unique
  photo: string; // Required
  planId: number; // Has a default value, but should be included when creating or updating users, optional in TypeScript context
  creditBalance: number; // Also has a default value, treated similarly to planId
}

const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  clerkId: { type: String, required: true, unique: true },
  photo: { type: String, requried: true },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);

export default User;
