import Coins from "../models/schema";

const getDeviation = async (req: any, res: any) => {
  const { coin } = req.query;

  try {
    const records = await Coins.find({
      name: coin.charAt(0).toUpperCase() + coin.slice(1),
    })
      .sort({ createdAt: -1 })
      .limit(100);

    if (records.length === 0)
      return res.status(404).send({ message: "No records found" });

    const prices = records.map((record) => record.price);
    const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;
    const variance =
      prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) /
      prices.length;
    const deviation = Math.sqrt(variance);

    res.status(200).json({
      deviation: deviation,
    });
  } catch (error: any) {
    res.status(500).send({ message: "Error calculating deviation" });
  }
};

export default getDeviation;