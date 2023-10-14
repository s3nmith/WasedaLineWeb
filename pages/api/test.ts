// api/test.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  receivedData: string | null;
};

let storedData: string | null = null; // In-memory storage for the data

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    storedData = req.body.data || null;
    res.status(200).json({ receivedData: storedData });
  } else if (req.method === "GET") {
    res.status(200).json({ receivedData: storedData });
  } else {
    res.status(405).json({ receivedData: "Method not allowed" });
  }
}
