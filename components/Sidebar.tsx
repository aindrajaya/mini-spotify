import NextImage from "next/image";
import NextLink from "next/link";
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

const MusicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: '/'
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: '/favorite'
  },
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
            {NavMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon 
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider marginY="20px"/>
        <Box marginBottom="20px">
          <List spacing={2}>
            {MusicMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon 
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar