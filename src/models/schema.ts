import mongoose from "mongoose";

const CoinSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    marketCap: { type: Number, required: true },
    change: { type: Number, required: true },
  },
  { timestamps: true }
);

const Coins = mongoose.model("Coins", CoinSchema);
export default Coins;