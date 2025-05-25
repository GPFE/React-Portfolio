import {
  Flex,
  Spinner
} from "@chakra-ui/react";

import ShoppingCartItem from "./ShoppingCartItem.jsx";

export default function ShoppingCartItemList({dispatch, cart, shoppingCartItems}) { 
  return (
    <Flex flexDirection="column" gap="1rem">
        {
            shoppingCartItems ?
            shoppingCartItems.map(item => (
                <ShoppingCartItem
                    cart={cart}
                    dispatch={dispatch}
                    key={item.id}
                    name={item.name}
                    dollars={item.dollars}
                    icon={item.icon}
                    id={item.id}
                />
            )) :
            <Spinner />
        }
    </Flex>
  )
}
