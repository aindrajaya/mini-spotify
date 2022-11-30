import { ValidateRoute } from "../../lib/auth";
import prisma from "../../lib/prisma";

export default ValidateRoute(async (req: any, res: any, user: any) => {
  const playlistCount = await prisma.playlist.count({
    where: {
      userId: user.id,
    },
  });

  res.json({ ...user, playlistCount });
});
