import { handleMethods } from "@/libs/middlewares/methods";

export default handleMethods({
  GET: async (req, res) => {
    res.json({ message: "Hello" });
  },
});