import { v4 as isUuid } from "uuid";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _id: {
    type: String,
    default: function genUuid() {
      return isUuid();
    },
  },
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  userName: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
});

export const userModel = mongoose.model("User", userSchema);
