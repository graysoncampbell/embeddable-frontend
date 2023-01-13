import { getAuth } from "@clerk/nextjs/server";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req, res) {
  const { sessionId, userId } = getAuth(req);

  if (!sessionId) {
    return res.status(401).json({ id: null });
  }

  return res.status(200).json({ id: userId });
}
