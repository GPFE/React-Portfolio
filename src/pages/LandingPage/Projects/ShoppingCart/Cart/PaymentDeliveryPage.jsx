import { Radio, Card, CardBody, useRadioGroup, VStack, RadioGroup } from "@chakra-ui/react";
import { RadioCard } from "../RadioCard";

export default function PaymentDeliveryPage() {
  const options = ['Home delivery', 'Show room', 'Stores']

  const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'delivery',
      defaultValue: 'Home delivery',
      onChange: console.log,
    })
    const group = getRootProps()

  return (
    <Card>
        <CardBody>
            <VStack {...group}>
              {options.map((value) => {
                const radio = getRadioProps({ value })
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                )
              })}
            </VStack>
        </CardBody>
    </Card>
  )
}
