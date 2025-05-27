import { Link } from "react-router"
import { Box, Flex, Grid, PopoverContent, PopoverTrigger, Popover, Card, CardBody, Button, Text } from "@chakra-ui/react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Atom01Icon, Book02Icon, BookOpen02Icon, Contact01Icon, Home01Icon, MenuSquareIcon, MoreHorizontalIcon, MoreIcon, NanoTechnologyIcon, SourceCodeSquareIcon } from "@hugeicons/core-free-icons"
import NavItem from "./NavItem"

export default function Navbar() {
    return(
        <Grid
            pos="fixed"
            top="0"
            p="1rem"
            px="2rem"
            justifyContent="right"
            width="100%"
            pointerEvents="none"
            zIndex={1}
        >
            <Popover
                pointerEvents="auto"
            >
                <PopoverTrigger
                    pointerEvents="auto"
                >
                    <Button
                        pointerEvents="auto"
                        backgroundColor="gray.800"
                        color="white"
                        colorScheme="black"
                        p="1.5rem .5rem"
                        borderRadius="3rem"
                        backdropBlur="10rem"
                        backdropFilter="auto"
                        boxShadow="0 10px 20px rgba(0, 0, 0, 0.25)"
                        role="group"
                        _hover={{transform: "scale(1.2)"}}
                    >
                            <Flex
                                pl="1rem"
                                gap="1rem"
                                width="100%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Text>MENU</Text>
                                <Box _groupHover={{transform: "rotate(-90deg)"}} transition=".1s ease-in-out" justifySelf="right" borderRadius="69rem" backgroundColor="gray.700" p=".3rem">
                                    <HugeiconsIcon icon={MoreIcon}  color="white" fill="white"/>
                                </Box>
                            </Flex>
                        </Button>
                </PopoverTrigger>
                <PopoverContent
                        backdropFilter="auto"
                        borderRadius="1rem"
                        backgroundColor="gray.100"
                        backdropBlur="1rem"
                        p="1rem 2rem"
                        pointerEvents="auto"
                        width="100%"
                >
                    <Grid
                        gap="1rem"
                        justifyContent="center"
                    >
                        <NavItem
                            href="#home"
                            icon={Home01Icon}
                        >
                            Home
                        </NavItem>
                        <NavItem
                            href="#projects"
                            icon={SourceCodeSquareIcon}
                        >
                            Projects
                        </NavItem>
                        <NavItem
                            href="#techstack"
                            icon={Atom01Icon}
                        >
                            Techstack
                        </NavItem>
                        <NavItem
                            href="#about"
                            icon={Book02Icon}
                        >
                            About
                        </NavItem>
                        <NavItem
                            href="#contact"
                            icon={Contact01Icon}
                        >
                            Contact
                        </NavItem>
                    </Grid>
                </PopoverContent>
            </Popover>
        </Grid>
    )
}