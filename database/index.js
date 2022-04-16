import mongoose from "mongoose";

export const dataBase = mongoose.connect(process.env.DATABASE_URL_CONNECTION);
