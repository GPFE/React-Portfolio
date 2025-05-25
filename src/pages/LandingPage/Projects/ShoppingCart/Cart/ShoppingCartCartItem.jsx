import {
  GridItem,
  ButtonGroup,
  Flex,
  Button,
  Card,
  Heading,
  Box,
  Grid,
  Text,
  CardBody,
  IconButton,
} from "@chakra-ui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Add01Icon,
  Remove01Icon,
  StarIcon
} from "@hugeicons/core-free-icons";
                    
export default function ShoppingCartCartItem({name, dollars, icon, dispatch, id, count}) {
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
                    <ButtonGroup isAttached>
                        <IconButton
                            icon={<HugeiconsIcon icon={Remove01Icon} />}
                            backgroundColor="blue.600"
                            color="white"
                            width="100%"
                            _hover={{
                                bgGradient: "linear(to-r, orange.500, orange.400, yellow.300)"
                            }}
                            onClick={() => (dispatch({
                                type: "decremented_item",
                                payload: {
                                    id,
                                    amount: 1
                                }
                            }))}
                        />
                            <Grid bgColor="gray.100" placeContent="center">
                                <Text px="1rem">{count}</Text>
                            </Grid>
                        <IconButton icon={<HugeiconsIcon icon={Add01Icon} />}
                            backgroundColor="blue.600"
                            color="white"
                            width="100%"
                            _hover={{
                                bgGradient: "linear(to-r, orange.500, orange.400, yellow.300)"
                            }}
                            onClick={() => dispatch({
                                type: "incremented_item",
                                payload: {
                                    id,
                                    amount: 1
                                }
                            })}
                        />
                    </ButtonGroup>
                </GridItem>
                </GridItem>
            </Grid>
            </CardBody>
        </Card>
    )
}