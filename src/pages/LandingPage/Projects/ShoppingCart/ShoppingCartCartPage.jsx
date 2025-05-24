import { Button } from "@chakra-ui/react"
import ShoppingCartCartItem from "./ShoppingCartCartItem"

export default function ShoppingCartCartPage({cart, shoppingCartItems, dispatch}) {
  return (
    <>
      {
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
        }
        )
      }
      <Button
          backgroundColor="blue.600"
          color="white"
          width="100%"
          _hover={{
              bgGradient: "linear(to-r, orange.500, orange.400, yellow.300)"
          }}
      >
          Continue
      </Button>
  </>
  )
}
