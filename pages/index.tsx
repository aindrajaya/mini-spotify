import { Box, Text, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import GradientLayout from "../components/GradientLayout";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  const { user } = useMe();
  console.log(user, "data user");

  return (
    <GradientLayout
      color="orange"
      children={undefined}
      image="https://www.pngkit.com/png/detail/2-25926_john-cena-orange-john-cena-thor-ragnarok.png"
      subtitle="Profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`Yeah that's it ${user?.playlistCount} playlist`}
      roundImage={undefined}
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map(
            (artist: {
              name:
                | boolean
                | ReactChild
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            }) => (
              <Box paddingX="10px" width="20%">
                <Box
                  bg="gray.900"
                  borderRadius="4px"
                  padding="15px"
                  width="100%"
                >
                  <Image
                    src="https://placekitten.com/300/300"
                    borderRadius="100%"
                  />
                  <Box marginTop="20px">
                    <Text fontSize="large">{artist.name}</Text>
                    <Text>Artist</Text>
                  </Box>
                </Box>
              </Box>
            )
          )}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists },
  };
};

export default Home;
