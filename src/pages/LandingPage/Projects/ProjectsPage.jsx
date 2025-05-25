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

export default function ProjectsPage() {
  return (
    <Grid
      className="projects"
      p="2rem"
      height="100vh"
      bgGradient="linear(to-r, red.400, orange.300)"
      minHeight={0}
    >
      <Card
        backdropBlur="1rem"
        backgroundColor="whiteAlpha.700"
        backdropFilter="auto"
        borderRadius="1rem 2rem"
        p="2rem"
        height="100%"
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
          height="100%"
          p={0}
          display="flex"
          flexDirection="column"
          minHeight={0}
        >
          <Grid
            height="100%"
            pt="1rem"
            gap="1rem"
            templateColumns="1fr 1fr"
            templateRows="1fr"
            minHeight={0}
          >
            <GridItem height="100%" minHeight={0}>
              <CodeInChat />
            </GridItem>
            <GridItem height="100%" minHeight={0}>
              <ShoppingCart />
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </Grid>
  );
}
