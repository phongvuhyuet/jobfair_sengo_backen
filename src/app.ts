import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import swagggerUI from "swagger-ui-express";
import * as openapiSpecification from "./swagger.json";
import healthzRouter from "./routes/healthz";

dotenv.config();

const app: Express = express();

app.use(morgan("dev"));
// cors
var whitelist = [process.env.CLIENT_DOMAIN];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// mongoose
mongoose
  .connect(process.env.DATABASE_URI as string)
  .then(() => {
    console.log("Connect to database successfully!");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/api-docs", swagggerUI.serve, swagggerUI.setup(openapiSpecification));

app.use("/healthz", healthzRouter);
app.get("/swagger/swagger.json", (req: Request, res: Response) => {
  return res.sendFile(__dirname + "/swagger.json");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
