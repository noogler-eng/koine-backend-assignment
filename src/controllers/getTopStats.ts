import Coins from "../models/schema";

const getTopStats = async (req: any, res: any) => {
  const { coin } = req.query;

  try {
    const cryptoData = await Coins.findOne({
      name: coin.charAt(0).toUpperCase() + coin.slice(1),
    }).sort({ createdAt: -1 });

    if (!cryptoData) return res.status(404).send({ message: "Coin not found" });

    res.send({
      price: cryptoData.price,
      marketCap: cryptoData.marketCap,
      "24hChange": cryptoData.change,
    });
  } catch (error: any) {
    res.status(500).send({ message: "Error fetching stats" });
  }
};

export default getTopStats;
