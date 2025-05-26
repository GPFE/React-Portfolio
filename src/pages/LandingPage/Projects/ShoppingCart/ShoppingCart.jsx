import {
  Button,
  Card,
  Heading,
  CardBody,
  Flex,
  CardHeader,
  Badge,
} from "@chakra-ui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Home01Icon,
  ShoppingCart01Icon,
} from "@hugeicons/core-free-icons";
import ShoppingCartItemList from "./ShoppingCartItemList";
import { useReducer, useState } from "react";
import ShoppingCartCartPage from "./Cart/ShoppingCartCartPage";
import cartReducer from "./cartReducer";
import { shoppingCartItems } from "./shoppingCartItems";

export default function ShoppingCart() {
    const [shoppingCartPage, setShoppingCartPage] = useState("home")
    const [cart, dispatch] = useReducer(cartReducer, {})
    const shoppingCartPages = {
        home: <ShoppingCartItemList
                dispatch={dispatch}
                shoppingCartItems={shoppingCartItems}
                cart={cart}
            />,
        cart: <ShoppingCartCartPage 
            cart={cart}
            shoppingCartItems={shoppingCartItems}
            dispatch={dispatch}
        />,
        paymentDelivery: "add this page...",
        addressPage: "add this page..."
    }

  return (
    <Card height="100%">
        <CardBody height="100%">
                <CardHeader>
                    <Heading>Shopping Cart</Heading>
                </CardHeader>
                <CardBody height="85%" overflow="auto">
                    <Card>
                        <CardBody>
                            <Flex justifyContent="center" gap="1rem">
                                <Button
                                    onClick={() => setShoppingCartPage("home")}
                                    width="100%"
                                    _hover={{
                                        bgGradient: "linear(to-r, orange.500, orange.400, yellow.300)"
                                    }}
                                    bgColor={shoppingCartPage === "home" ? "blue.600" : ""}
                                    color={shoppingCartPage === "home" ? "white" : ""}
                                >
                                    <HugeiconsIcon icon={Home01Icon} />
                                </Button>
                                <Button
                                    onClick={() => setShoppingCartPage("cart")}
                                    width="100%"
                                    _hover={{
                                        bgGradient: "linear(to-r, orange.500, orange.400, yellow.300)"
                                    }}
                                    bgColor={shoppingCartPage === "cart" ? "blue.600" : ""}
                                    color={shoppingCartPage === "cart" ? "white" : ""}
                                >
                                    <HugeiconsIcon icon={ShoppingCart01Icon} />
                                    {
                                        Object.keys(cart).length !== 0 && shoppingCartPage !== "cart" ?
                                        <Badge pos="absolute" bottom="-.3rem" colorScheme="blue">checkout</Badge> :
                                        ""
                                    }
                                </Button>
                            </Flex>
                        </CardBody>
                    </Card>
                    {
                        shoppingCartPages[shoppingCartPage]
                    }
            </CardBody>
        </CardBody>
    </Card>
  )
}
