import NextImage from "next/image";
import { Box, List, ListItem, ListIcon, Divider, Center, LinkBox, LinkOverlay} from "@chakra-ui/layout";
import {MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite} from "react-icons/md";

const NavMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: '/'
  },
  {
    name: "Search",
    icon: MdSearch,
    route: '/search'
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: '/library'
  }
]

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
        <Box marginBottom="20px">
          <List spacing={2}>
          Sidebar Layout Menu
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar