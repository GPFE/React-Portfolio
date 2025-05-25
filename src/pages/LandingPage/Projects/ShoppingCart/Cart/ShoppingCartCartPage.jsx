import { Stepper, Card, CardBody, Box, StepIndicator, StepStatus, StepNumber, StepIcon, useSteps, Button, Text, Step, StepSeparator } from "@chakra-ui/react"
import CartListPage from "./CartListPage"
import PaymentDeliveryPage from "./PaymentDeliveryPage"
import AddressPage from "./AddressPage"
import ExitPage from "./ExitPage"

const steps = [
  {title: "Cart"},
  {title: "Payment Delivery"},
  {title: "Address"},
  {title: "Exit"},
]

export default function ShoppingCartCartPage({cart, shoppingCartItems, dispatch}) {
  const totalPriceInDollars = Object.keys(cart).reduce((totalPrice, currentItemId) => {
    const currentItemPrice = shoppingCartItems.find((item) => item.id == currentItemId).dollars
    const currentItemCount = cart[currentItemId]

    return(
      totalPrice + (currentItemPrice * currentItemCount)
    )
  }, 0)

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length
  })

  const shoppingCartCartPages = [
    <CartListPage
        key={1}
        cart={cart}
        shoppingCartItems={shoppingCartItems}
        dispatch={dispatch}
        totalPriceInDollars={totalPriceInDollars}
    />,
    <PaymentDeliveryPage key={2} />,
    <AddressPage key={3} />,
    <ExitPage key={4} />
  ]

  const handleNextStep = () => {
    if (activeStep + 1 !== steps.length) {
      setActiveStep(activeStep + 1)
    }
  }

  return (
    <Box>
      <Card>
        <CardBody >
          <Stepper size="sm" index={activeStep}>
              {
                steps.map((step, index) => (
                  <Step key={index} onClick={() => setActiveStep(index)}>
                    <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        // incomplete={<StepNumber />}
                        // active={<StepNumber />}
                      />
                    </StepIndicator>
                    <StepSeparator />
                  </Step>
                ))
              }
          </Stepper>
        </CardBody>
      </Card>
      {
        shoppingCartCartPages[activeStep]
      }
      <Button
          backgroundColor="blue.600"
          color="white"
          width="100%"
          _hover={{
              bgGradient: "linear(to-r, orange.500, orange.400, yellow.300)"
          }}
          onClick={handleNextStep}
      >
          Continue
      </Button>
  </Box>
  )
}
