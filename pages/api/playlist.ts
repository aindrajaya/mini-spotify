import prisma from "../../lib/prisma";
import { ValidateRoute } from "../../lib/auth";

export default ValidateRoute(async (req, res, user) => {
  const playlists = await prisma.playlist.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      name: "asc",
    },
  });

  res.json(playlists);
});
