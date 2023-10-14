// api/test.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  receivedData: string | null;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const receivedData = req.body.data || null;
    res.status(200).json({ receivedData });
  } else {
    res.status(405).json({ receivedData: "Method not allowed" });
  }
}
