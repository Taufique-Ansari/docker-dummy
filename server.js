import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  return res.json({ msg: "Hello from the server", time: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});