import jwt, {JwtPayload} from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

interface TokenPayload extends JwtPayload {
  id: number;
}

export const ValidateRoute = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { TRAX_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, "hello") as TokenPayload;
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("Not a real user");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not Authorized" });
        return;
      }
      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not Authorized" });
  };
};

export const ValidateToken = (token: any) => {
  const user = jwt.verify(token, "hello");
  return user;
}