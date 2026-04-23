import express from "express";
//express + ypga
const app = express();
app.use(express.json());
const port = 8374;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
