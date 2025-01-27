import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import router from "./routes";

const app: Application = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({ credentials: true }));
app.use(helmet());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use("/api/v1", router);
app.use(globalErrorHandler);

app.all("*", (req: Request, res: Response) => {
  res.status(404).send("Route not found");
});
export default app;
