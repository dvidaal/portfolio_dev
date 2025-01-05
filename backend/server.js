import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRoutes from "./routes/emailRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());

const corsOptions = {
  credentials: true,
  origin: [
    process.env.CORS_ALLOWED_ORIGIN,
    process.env.CORS_ALLOWED_PRODUCTION,
    process.env.CORS_ALLOWED_ORIGIN_2,
    process.env.CORS_ALLOWED_ORIGIN_3,
    process.env.CORS_ALLOWED_ORIGIN_4,
    process.env.CORS_ALLOWED_ORIGIN_5,
  ],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use("/send-email", emailRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});
