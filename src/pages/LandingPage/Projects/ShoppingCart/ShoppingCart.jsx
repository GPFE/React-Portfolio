import {
  Button,
  Card,
  Heading,
  CardBody,
  Flex,
  CardHeader,
} from "@chakra-ui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Home01Icon,
  ShoppingCart01Icon,
} from "@hugeicons/core-free-icons";
import ShoppingCartItemList from "./ShoppingCartItemList";
import { useReducer, useState } from "react";
import ShoppingCartCartPage from "./ShoppingCartCartPage";
import cartReducer from "./cartReducer";
import { shoppingCartItems } from "./shoppingCartItems";

export default function ShoppingCart() {
    const [shoppingCartPage, setShoppingCartPage] = useState("home")
    const [cart, dispatch] = useReducer(cartReducer, {})
    const shoppingCartPages = {
        home: <ShoppingCartItemList
                dispatch={dispatch}
                shoppingCartItems={shoppingCartItems}
            />,
        cart: <ShoppingCartCartPage 
            cart={cart}
            shoppingCartItems={shoppingCartItems}
            dispatch={dispatch}
        />
    }

    console.log(cart)

  return (
    <Card height="100%">
        <CardBody>
                <CardHeader>
                    <Heading>Shopping Cart</Heading>
                </CardHeader>
                <CardBody>
                    <Card>
                        <CardBody>
                            <Flex justifyContent="center" gap="1rem">
                                <Button
                                    onClick={() => setShoppingCartPage("home")}
                                    width="100%"
                                    _hover={{
                                        bgGradient: "linear(to-r, orange.500, orange.400, yellow.300)"
                                    }}
                                >
                                    <HugeiconsIcon icon={Home01Icon} />
                                </Button>
                                <Button
                                    onClick={() => setShoppingCartPage("cart")}
                                    width="100%"
                                    _hover={{
                                        bgGradient: "linear(to-r, orange.500, orange.400, yellow.300)"
                                    }}
                                >
                                    <HugeiconsIcon icon={ShoppingCart01Icon} />
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
