import GradientLayout from "../../components/GradientLayout";
import { ValidateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

const getBGColor = (id: any) => {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "gray",
    "teal",
    "yelloq",
  ];

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlist }) => {
  const color = getBGColor(playlist.id);

  return (
    <GradientLayout color={color}>
      <div>{playlist.name}</div>
    </GradientLayout>
  )
};

export const getServerSideProps = async ({ query, req }) => {
  const { id } = ValidateToken(req.cookies.TRAX_ACCESS_TOKEN);
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: { playlist },
  };
};

export default Playlist;
