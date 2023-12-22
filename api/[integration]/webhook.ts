import { handleMethods } from "@/libs/middlewares/methods";

export default handleMethods({
  POST: async (req, res) => {
    res.json({ message: "Hello" });
  },
});