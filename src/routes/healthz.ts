import express, { Request, Response } from "express";

const healthzRouter = express.Router();

healthzRouter.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ status: "OK" });
});
export default healthzRouter;
