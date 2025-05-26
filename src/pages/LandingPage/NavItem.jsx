import { Button, Text, Flex } from "@chakra-ui/react"
import { HugeiconsIcon } from "@hugeicons/react"

export default function NavItem({href, icon, children}) {
    return(
        <a style={{ width: '100%' }} href={href}>
            <Button
                color="black"
                // backdropBlur="1rem"
                // backdropFilter="auto"
                width="100%"
                // backgroundColor="whiteAlpha.800"
                border="none"
                // boxShadow="0 10px 20px rgba(0, 0, 0, 0.25)"
                p="2rem 3rem"
            >
                <Flex
                    width="100%"
                    gap="1rem"
                    justifyContent="left"
                >
                    <HugeiconsIcon icon={icon} />
                    <Text fontSize="2xl">{children}</Text>
                </Flex>
            </Button>
        </a>
    )
}