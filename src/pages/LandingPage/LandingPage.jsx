import {
  Center,
  Button,
  Box,
  Avatar,
  Card,
  SkeletonCircle,
  Heading,
  Grid,
  Text,
  CardBody,
  CardHeader,
  Highlight,
  Link,
  Badge,
  useMediaQuery,
} from "@chakra-ui/react";
import "./LandingPage.css";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Coffee01Icon,
  Css3Icon,
  GameIcon,
  GithubIcon,
  Html5Icon,
  JavaScriptIcon,
  Linkedin01Icon,
  Mail01Icon,
  NpmIcon,
  SqlIcon,
  WebProgrammingIcon,
  ZapIcon,
} from "@hugeicons/core-free-icons";
import ProjectsPage from "./Projects/ProjectsPage.jsx";
import { ICON_COMPONENTS, RailsIcon } from "./Projects/icons.jsx";
import React from "react";
import Navbar from "./Navbar.jsx";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

export default function LandingPage() {
  const [isWiderThan800] = useMediaQuery('(min-width: 800px)')

  useEffect(() => {
    const hash = window.location.hash || "#home"

    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const copyEmail = () => {
      toast.info("📨  Email copied.")
      navigator.clipboard.writeText("arcd009999@gmail.com", {
        position: "bottom-right",
        theme: "dark"
      })
  }

  const techstackIcons = ICON_COMPONENTS.map((icon, index) => (
      React.createElement(icon, {key: index, size: 80})
  ))

  return (
    <Box className="intro-page" height="100vh" width="100%"
        >
      <Center
            // bgGradient="linear(to-r, blue.400, purple.400, red.400)"
            bgGradient="linear(to-r, red.400, orange.300)"
      >
        <Navbar />
        <section id="home">
          <Grid placeContent="center" height="100vh"
          >
            <Grid
                  backdropBlur="1rem"
                  backgroundColor="whiteAlpha.500"
                  backdropFilter="auto"
                  p="1rem 2rem"
                  borderRadius="1rem"
            >
                <Grid placeContent="center"
                >
                  <Avatar size="2xl" src="/pictures/arnošt_havelka.jpg" />
                </Grid>
                <Heading as="h1" pt="1rem">
                  Arnošt Havelka
                </Heading>
                <Text>React | Ruby On Rails | Developer</Text>
            </Grid>
          </Grid>
        </section>
      </Center>
      <ProjectsPage />
      <Grid
        // bgGradient="linear(to-r, blue.400, teal.300)"
        bgGradient="linear(to-r, red.400, orange.300)"
        height={isWiderThan800 ? "100vh" : ""}
        p="1rem"
        >
        <section id="techstack">
          <Grid
            height={isWiderThan800 ? "100vh" : ""}
            placeContent="center">
            <Card
              backdropBlur="1rem"
              backgroundColor="whiteAlpha.700"
              backdropFilter="auto"
            >
              <CardBody>
                <CardHeader
                  backgroundColor="white"
                  borderRadius=".5rem"
                  mb="1rem"
                >
                  <Heading px="calc(1rem + 20vw)">Techstack</Heading>
                </CardHeader>
                    <Grid gap="1rem" gridTemplateColumns="repeat(auto-fill, minmax(6rem, 1fr))">
                      {techstackIcons.map(
                        (icon, index) => (
                          <Card key={index} justifyContent="center" alignItems="center">
                            <CardBody>
                              {icon}
                            </CardBody>
                          </Card>
                        ),
                      )}
                    </Grid>
              </CardBody>
            </Card>
          </Grid>
        </section>
      </Grid>
      <Grid
        bgGradient="linear(to-r, purple.400, blue.300)"
        py="1rem"
      >
        <section id="about">
          <Grid
            height={isWiderThan800 ? "100vh" : ""}
            placeContent="center"
            p="1rem"
          >
            <Card
                backgroundColor="whiteAlpha.700"
                backdropFilter="auto"
                backdropBlur="1rem"
                p="1rem 2rem"
                alignItems="center"
            >
              <CardHeader>
                <Heading>About Me</Heading>
              </CardHeader>
              <CardBody maxWidth="calc(8rem + 20vw)">
                  I&rsquo;m a <Link color="purple.700" href="https://rubyonrails.org/">Ruby on Rails</Link> developer who does his best to write clean code and enjoys working with <Link href="https://react.dev/" color="purple.700">React</Link>. I test with <Link href="https://vitest.dev/" color="purple.700">Vitest</Link>, manage databases, and build reliable full-stack applications. Game development using the <Link href="https://defold.com/" color="purple.700">Defold engine</Link> is another hobby of mine.
              </CardBody>
            </Card>
            <Card
                mt="1rem"
                backgroundColor="whiteAlpha.700"
                backdropFilter="auto"
                backdropBlur="1rem"
            >
            <CardHeader pb={0}>
                <Heading p={0}>Learn more</Heading>
            </CardHeader>
            <CardBody>
                <Grid gridTemplateColumns={isWiderThan800 ? "1fr 1fr" : ""} gap="1rem">
                <Card>
                    <CardBody>
                    <Grid placeContent="center">
                        <HugeiconsIcon size={60} icon={GameIcon} />
                    </Grid>
                    <CardHeader>Games</CardHeader>
                    <Badge fontSize="md">comming soon</Badge>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                    <Grid placeContent="center">
                        <HugeiconsIcon size={60} icon={WebProgrammingIcon} />
                    </Grid>
                    <CardHeader>Other Projects</CardHeader>
                    <Badge fontSize="md">comming soon</Badge>
                    </CardBody>
                </Card>
            </Grid>
            </CardBody>
            </Card>
          </Grid>
        </section>
      </Grid>
    <Grid
        bgGradient="linear(to-r, purple.400, blue.300)"
    >
        <section id="contact">
          <Grid
            height={isWiderThan800 ? "100vh" : ""}
            placeContent="center"
            p="1rem"
          >
            <Card
                mt="1rem"
                backgroundColor="whiteAlpha.700"
                backdropFilter="auto"
                backdropBlur="1rem"
            >
                <CardHeader pb={0}>
                    <Heading p={0}>Contact me</Heading>
                </CardHeader>
                <CardBody>
                    <Grid gridTemplateColumns={isWiderThan800 ? "1fr 1fr 1fr" : "1fr 1fr"} gap="1rem">
                          <Card _hover={{transform: "scale(1.1)"}} transition=".1s ease-in-out">
                              <CardBody>
                              <Grid placeContent="center">
                                  <HugeiconsIcon size={60} icon={Linkedin01Icon} />
                              </Grid>
                              <CardHeader>Linked in</CardHeader>
                              <Link
                                href="https://www.linkedin.com/in/arnošt-havelka-70710b252"
                              >
                                <Button
                                  backgroundColor="gray.300"
                                  backdropFilter="auto"
                                  backdropBlur="1rem"
                                  _hover={{
                                    bgGradient: "linear(to-r, purple.400, blue.300)"
                                  }}
                                  >open</Button>
                              </Link>
                              </CardBody>
                          </Card>
                          <Card _hover={{transform: "scale(1.1)"}} transition=".1s ease-in-out">
                              <CardBody>
                              <Grid placeContent="center">
                                  <HugeiconsIcon size={60} icon={GithubIcon} />
                              </Grid>
                              <CardHeader>Github</CardHeader>
                              <Link
                                href="https://github.com/GPFE"
                              >
                                <Button
                                  backgroundColor="gray.300"
                                  backdropFilter="auto"
                                  backdropBlur="1rem"
                                  _hover={{
                                    bgGradient: "linear(to-r, purple.400, blue.300)"
                                  }}
                                  >open</Button>
                              </Link>
                              </CardBody>
                          </Card>
                          <Card _hover={{transform: "scale(1.1)"}} transition=".1s ease-in-out">
                              <CardBody>
                              <Grid placeContent="center">
                                  <HugeiconsIcon size={60} icon={Mail01Icon} />
                              </Grid>
                              <CardHeader>Email</CardHeader>
                              <Button
                                backgroundColor="gray.300"
                                backdropFilter="auto"
                                backdropBlur="1rem"
                                onClick={copyEmail}
                                _hover={{
                                  bgGradient: "linear(to-r, purple.400, blue.300)"
                                }}
                                >copy</Button>
                              </CardBody>
                          </Card>
                    </Grid>
                </CardBody>
            </Card>
          </Grid>
          <ToastContainer autoClose={3000} position="bottom-right" />
        </section>
    </Grid>
    </Box>
  );
}
