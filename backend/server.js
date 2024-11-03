import express from "express";
import dotenv from "dotenv";
import emailRoutes from "./routes/emailRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/send-email", emailRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});
