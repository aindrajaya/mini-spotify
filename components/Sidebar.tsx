import NextImage from "next/image";
import { Box, List, ListItem, ListIcon, Divider, Center, LinkBox, LinkOverlay} from "@chakra-ui/layout";
import {MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite} from "react-icons/md";

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingY="20px">
          <NextImage src="/logo.svg" height={60} width={120}/>
        </Box>
        Sidebar Menu
      </Box>
    </Box>
  )
}

export default Sidebar