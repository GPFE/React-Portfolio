import { produce } from "immer"

export default function cartReducer(cart, action) {
    switch (action.type) {
        case "incremented_item": {
            return produce(cart, cartDraft => {
                cartDraft[action.payload.id] += action.payload.amount
            })
        }
        case "decremented_item": {
            if ((cart[action.payload.id] - action.payload.amount) < 1) {
                return produce(cart, cartDraft => {
                    delete cartDraft[action.payload.id]
                })
            }

            return produce(cart, cartDraft => {
                cartDraft[action.payload.id] -= action.payload.amount
            })
        }
        case "created_item": {
            if (cart[action.payload.id]) {
                return produce(cart, cartDraft => {
                    cartDraft[action.payload.id] += action.payload.amount
                }) 
            }

            return produce(cart, cartDraft => {
                cartDraft[action.payload.id] = action.payload.amount
            })
        }
        case "deleted_item": {
            return produce(cart, cartDraft => {
                delete cartDraft[action.payload.id]
            })
        }
    }
}