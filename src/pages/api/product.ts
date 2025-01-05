/* eslint-disable @typescript-eslint/no-explicit-any */
import { retriveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  statusCode: number;
  status: boolean;
  data: any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const data = await retriveData("products");
  res.status(200).json({ statusCode: 200, status: true, data });
};

export default handler;
