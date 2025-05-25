import ShoppingCartCartItem from "./ShoppingCartCartItem"
import { Text, Card, Stat, StatLabel, StatNumber, CardBody } from "@chakra-ui/react"

export default function CartListPage({cart, shoppingCartItems, dispatch, totalPriceInDollars}) {
    return(
        <>
            {
                Object.keys(cart).length !== 0 ?
                Object.keys(cart).map(cartItemId => {
                const item = shoppingCartItems.find((item) => (item.id == cartItemId))
                const count = cart[cartItemId]

                return(
                    <ShoppingCartCartItem
                    key={cartItemId}
                    name={item.name}
                    dollars={item.dollars}
                    count={count}
                    icon={item.icon}
                    id={item.id}
                    dispatch={dispatch}
                    />
                )
                }) :
                <Card>
                    <CardBody>
                        <Text textAlign="center" fontSize="xl" color="gray.500" mt={4}>
                            Your cart is empty.
                        </Text>
                    </CardBody>
                </Card>
                
            }
            <Card>
                <CardBody>
                    <Stat>
                        <StatLabel>Total Price</StatLabel>
                        <StatNumber>${totalPriceInDollars}</StatNumber>
                    </Stat>
                </CardBody>
            </Card>
        </>
    )
}