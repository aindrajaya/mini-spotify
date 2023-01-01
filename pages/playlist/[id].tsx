import { JwtPayload } from "jsonwebtoken";
import { GetServerSidePropsContext } from "next";
import GradientLayout from "../../components/GradientLayout";
import SongsTable from "../../components/songsTable";
import { ValidateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";
import { Playlist } from "../../components/types/Playlist";

interface TokenPayload extends JwtPayload {
  id: number;
}

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

const PlaylistList = ({ playlist }: { playlist: Playlist }) => {
  const color = getBGColor(playlist.id);

  return (
    <GradientLayout
      color={color}
      roundImage={false}
      title={playlist.name}
      subtitle="playlist"
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <SongsTable songs={playlist.songs} />
    </GradientLayout>
  )
};

export const getServerSideProps = async ({
  query,
  req,
}: GetServerSidePropsContext) => {
  const { id } = ValidateToken(req.cookies.TRAX_ACCESS_TOKEN) as TokenPayload;
  const playlistId = query.id as string | undefined;

  if (!playlistId) {
    // Handle the case when query.id is undefined
    return {
      notFound: true,
    };
  }

  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +playlistId,
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

export default PlaylistList;
