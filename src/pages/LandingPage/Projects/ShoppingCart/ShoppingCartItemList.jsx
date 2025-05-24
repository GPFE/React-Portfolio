import {
  Flex,
  Spinner
} from "@chakra-ui/react";

import ShoppingCartItem from "./ShoppingCartItem.jsx";

export default function ShoppingCartItemList({dispatch, shoppingCartItems}) { 
  return (
    <Flex flexDirection="column" gap="1rem">
        {
            shoppingCartItems ?
            shoppingCartItems.map(item => (
                <ShoppingCartItem
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
