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
  SqlIcon,
  WebProgrammingIcon,
} from "@hugeicons/core-free-icons";
import ProjectsPage from "./Projects/ProjectsPage.jsx";

export default function LandingPage() {
  return (
    <Box className="intro-page" height="100vh" width="100%"
        >
      <Center
            // bgGradient="linear(to-r, blue.400, purple.400, red.400)"
            bgGradient="linear(to-r, red.400, orange.300)"
      >
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
      </Center>
      <ProjectsPage />
      <Grid
        // bgGradient="linear(to-r, blue.400, teal.300)"
        bgGradient="linear(to-r, red.400, orange.300)"
        height="100vh">
        <Grid placeContent="center">
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
                <Heading>Techstack</Heading>
              </CardHeader>
              <Card>
                <CardBody>
                  <Grid gap="1rem" templateColumns="1fr 1fr">
                    {[JavaScriptIcon, Html5Icon, Css3Icon, SqlIcon].map(
                      (icon, index) => (
                        <HugeiconsIcon key={index} size="80" icon={icon} />
                      ),
                    )}
                  </Grid>
                </CardBody>
              </Card>
            </CardBody>
          </Card>
        </Grid>
      </Grid>
      <Grid
        bgGradient="linear(to-r, purple.400, blue.300)"
        placeContent="center"
        height="100vh"
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
    <Grid
        bgGradient="linear(to-r, purple.400, blue.300)"
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
    </Box>
  );
}
