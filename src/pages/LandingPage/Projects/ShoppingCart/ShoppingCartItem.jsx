import {
  GridItem,
  Flex,
  Button,
  Card,
  Heading,
  Grid,
  Text,
  CardBody,
} from "@chakra-ui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  StarIcon
} from "@hugeicons/core-free-icons";
                    
export default function ShoppingCartItem({dispatch, id, name, dollars, icon}) {
    return(
        <Card>
            <CardBody>
            <Grid gridTemplateColumns="1fr 2fr">
                <GridItem rowSpan={2}>
                <Grid placeContent="center" height="100%">
                    <HugeiconsIcon size={80} icon={icon} />
                </Grid>
                </GridItem>
                <GridItem>
                <Heading>{name}</Heading>
                <Flex justifyContent="center" alignItems="center">
                    <HugeiconsIcon size={15} icon={StarIcon} />
                    <HugeiconsIcon size={18} icon={StarIcon} />
                    <HugeiconsIcon size={21} icon={StarIcon} />
                    <HugeiconsIcon size={18} icon={StarIcon} />
                    <HugeiconsIcon size={15} icon={StarIcon} />
                </Flex>
                <Text textColor="red.700">${dollars}</Text>
                <GridItem colSpan={2}>
                    <Button
                        backgroundColor="blue.600"
                        color="white"
                        width="100%"
                        _hover={{
                            bgGradient: "linear(to-r, orange.500, orange.400, yellow.300)"
                        }}
                        onClick={() => (
                            dispatch({
                                type: "created_item",
                                payload: {
                                    id,
                                    amount: 1
                                }
                            })
                        )
                        }
                    >Add To Cart</Button>
                </GridItem>
                </GridItem>
            </Grid>
            </CardBody>
        </Card>
    )
}