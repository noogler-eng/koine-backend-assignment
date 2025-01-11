import axios from "axios";
import Coins from "../models/schema";
import cron from "node-cron";

const fetchData = async () => {
  // running for every 0 minutes and 2 hour
  cron.schedule("0 */2 * * *", async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,matic-network,ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true"
      );
      const { bitcoin, "matic-network": matic, ethereum } = response.data;

      const cryptoData = [
        {
          name: "Bitcoin",
          price: bitcoin.usd,
          marketCap: bitcoin.usd_market_cap,
          change: bitcoin.usd_24h_change,
        },
        {
          name: "Matic-network",
          price: matic.usd,
          marketCap: matic.usd_market_cap,
          change: matic.usd_24h_change,
        },
        {
          name: "Ethereum",
          price: ethereum.usd,
          marketCap: ethereum.usd_market_cap,
          change: ethereum.usd_24h_change,
        },
      ];

      await Coins.insertMany(cryptoData);
      console.log("working running.");
    } catch (error: any) {
      console.error("Error fetching coins data:", error);
    }
  });
};

export default fetchData;