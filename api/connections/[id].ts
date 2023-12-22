import { handleMethods } from "@/libs/middlewares/methods";

export default handleMethods({
  GET: async (req, res) => {
    res.json({ message: "Hello" });
  },
  PATCH: async (req, res) => {
    res.json({ message: "Hello" });
  },
  DELETE: async (req, res) => {
    res.json({ message: "Hello" });
  },
});