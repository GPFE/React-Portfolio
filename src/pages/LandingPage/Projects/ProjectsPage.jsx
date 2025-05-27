import {
  GridItem,
  Button,
  Card,
  Heading,
  Grid,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import CodeInChat from "./CodeInChat/CodeInChat";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import "./ProjectsPage.css"
import { useMediaQuery } from "@chakra-ui/react";

export default function ProjectsPage() {
  const [isWiderThan800] = useMediaQuery('(min-width: 800px)')

  return (
    <Grid
        bgGradient="linear(to-r, red.400, orange.300)"
        width="100%"
    >
      <section id="projects" style={{width: "100%"}}>
      <Grid
        height={isWiderThan800 ? "100vh" : ""}
        className="projects"
        p={isWiderThan800 ? "3rem 2rem" : "2rem 1rem"}
        pt="5rem"
        minHeight={0}
      >
          <Card
            backdropBlur="1rem"
            backgroundColor="whiteAlpha.700"
            backdropFilter="auto"
            borderRadius="1rem 2rem"
            p={isWiderThan800 ? "2rem" : "1rem"}
            height={isWiderThan800 ? "100%" : ""}
            width="100%"
            display="flex"
            flexDirection="column"
            minHeight={0}
          >
            <CardHeader
              mt="1rem"
              bgColor="white"
              borderRadius=".5rem"
            >
              <Heading as="h2">Projects</Heading>
            </CardHeader>
            <CardBody
              height={isWiderThan800 ? "100%" : ""}
              p={0}
              display="flex"
              flexDirection="column"
              minHeight={0}
            >
              <Grid
                height={isWiderThan800 ? "100%" : ""}
                pt="1rem"
                gap="1rem"
                templateColumns={isWiderThan800 ? "1fr 1fr" : ""}
                templateRows="1fr"
                minHeight={0}
              >
                <GridItem height={isWiderThan800 ? "100%" : ""}  minHeight={0}>
                  <CodeInChat />
                </GridItem>
                <GridItem height={isWiderThan800 ? "100%" : ""} minHeight={0}>
                  <ShoppingCart />
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
      </Grid>
        </section>
    </Grid>
  );
}
