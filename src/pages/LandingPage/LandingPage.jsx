import {
  Center,
  Box,
  Avatar,
  Card,
  SkeletonCircle,
  Heading,
  Grid,
  Text,
  CardBody,
  CardHeader,
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

export default function LandingPage() {
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
                  <Avatar size="2xl" src="../../public/pictures/arnošt_havelka.jpg" />
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
        height="100vh"
        >
        <section id="techstack">
          <Grid
            height="100vh"
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
      >
        <section id="about">
          <Grid
        height="100vh"
              placeContent="center"
          >
            <Card
                backgroundColor="whiteAlpha.700"
                backdropFilter="auto"
                backdropBlur="1rem"
                p="1rem 2rem"
            >
              <CardHeader>
                <Heading>About Me</Heading>
              </CardHeader>
              <CardBody>I like programming.</CardBody>
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
                <Grid gridTemplateColumns="1fr 1fr" gap="1rem">
                <Card>
                    <CardBody>
                    <Grid placeContent="center">
                        <HugeiconsIcon size={60} icon={GameIcon} />
                    </Grid>
                    <CardHeader>Games</CardHeader>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                    <Grid placeContent="center">
                        <HugeiconsIcon size={60} icon={WebProgrammingIcon} />
                    </Grid>
                    <CardHeader>Other Projects</CardHeader>
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
            height="100vh"
            placeContent="center"
          >
            <Card
                mt="1rem"
                backgroundColor="whiteAlpha.700"
                backdropFilter="auto"
                backdropBlur="1rem"
                p="1rem"
            >
                <CardHeader pb={0}>
                    <Heading p={0}>Contact me</Heading>
                </CardHeader>
                <CardBody>
                    <Grid gridTemplateColumns="1fr 1fr 1fr" gap="1rem">
                        <Card>
                            <CardBody>
                            <Grid placeContent="center">
                                <HugeiconsIcon size={60} icon={Linkedin01Icon} />
                            </Grid>
                            <CardHeader>Linked in</CardHeader>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                            <Grid placeContent="center">
                                <HugeiconsIcon size={60} icon={GithubIcon} />
                            </Grid>
                            <CardHeader>Github</CardHeader>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                            <Grid placeContent="center">
                                <HugeiconsIcon size={60} icon={Mail01Icon} />
                            </Grid>
                            <CardHeader>Email</CardHeader>
                            </CardBody>
                        </Card>
                    </Grid>
                </CardBody>
            </Card>
          </Grid>
        </section>
    </Grid>
    </Box>
  );
}
