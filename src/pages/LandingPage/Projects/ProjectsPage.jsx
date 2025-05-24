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

export default function ProjectsPage() {
  return (
    <Grid
      p="2rem"
      height="100vh"
      bgGradient="linear(to-r, red.400, orange.300)"
    >
      <Card
      backdropBlur="1rem"
        backgroundColor="whiteAlpha.700"
        backdropFilter="auto"
        borderRadius="1rem 2rem"
        p="2rem"
      >
        <CardHeader
            mt="1rem"
            bgColor="white"
            borderRadius=".5rem"
        >
          <Heading
           as="h2">Projects</Heading>
        </CardHeader>
        <CardBody
            p={0}
        >
          <Grid height="100%" pt="1rem" gap="1rem" templateColumns="1fr 1fr">
            <GridItem height="100%" rowSpan="2">
              <CodeInChat />
            </GridItem>
            <GridItem height="100%" rowSpan="2">
                <ShoppingCart />
            </GridItem>
            </Grid>
            </CardBody>
        </Card>
    </Grid>
  );
}
