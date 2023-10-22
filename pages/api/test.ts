import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  receivedData: string | null;
};

let storedData: string | null = null;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("Received request. Method:", req.method);
  console.log("Request body:", req.body);

  if (req.method === "POST") {
    storedData = req.body.data || null;
    res.status(200).json({ receivedData: storedData });
  } else if (req.method === "GET") {
    res.status(200).json({ receivedData: storedData });
  } else {
    res.status(405).json({ receivedData: "Method not allowed" });
  }
}
