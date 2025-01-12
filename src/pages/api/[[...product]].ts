/* eslint-disable @typescript-eslint/no-explicit-any */
import { retriveData, retriveDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  statusCode: number;
  status: boolean;
  data: any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.query.product![1]) {
    const data = await retriveDataById("products", req.query.product![1]);
    res.status(200).json({ statusCode: 200, status: true, data });
  }
  const data = await retriveData("products");
  res.status(200).json({ statusCode: 200, status: true, data });
};

export default handler;
