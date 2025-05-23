import { InputGroup, Center, InputRightAddon, InputLeftAddon, Input, Button, Box, Card, SkeletonCircle, Heading, Grid, Text, CardBody, CardHeader } from "@chakra-ui/react";
import "./LandingPage.css"
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SentIcon } from '@hugeicons/core-free-icons'
import { formatDistanceToNow, parseISO } from "date-fns";

export default function LandingPage() {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([
        {
            "id": 2,
            "content": "Hello!",
            "sender_id": 2,
            "created_at": "2025-05-18T12:41:38.335Z",
            "updated_at": "2025-05-18T12:41:38.335Z",
            "receivable_id": 1,
            "receivable_type": "User",
            "stepper_cards": []
        },
        {
            "id": 2,
            "content": "Do like my portfolio so far?",
            "sender_id": 2,
            "created_at": "2025-05-18T12:41:38.335Z",
            "updated_at": "2025-05-18T12:41:38.335Z",
            "receivable_id": 1,
            "receivable_type": "User",
            "stepper_cards": []
        },
    ])

    const receiver_id = 2
    const isLoading = false

    const handleMessageSubmit = () => {
        setMessages([...messages, {
            "content": message,
            "sender_id": 1,
            "created_at": "2025-05-18T12:41:38.335Z",
            "updated_at": "2025-05-18T12:41:38.335Z",
            "receivable_id": 2,
            "receivable_type": "User",
            "stepper_cards": []
        }])
        setMessage("")
    }

    return(
        <Box className="intro-page" height="100vh" width="100%" bg="gray.100">
                <Center>
                    <Grid placeContent="center" height="100vh">
                        <Grid placeContent="center">
                            <SkeletonCircle size={250} />
                        </Grid>
                        <Heading as='h1' pt="1rem">Arnošt Havelka</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur.</Text>
                    </Grid>
                </Center>
            <Grid p="2rem" height="100vh">
                <Heading as="h2">Projects</Heading>
                <Grid templateColumns="1fr 1fr">
                    <Card>
                        <CardHeader>
                            <Heading>CodeInChat</Heading>
                        </CardHeader>
                        <CardBody>
                            <Grid gap="1rem">
                                {
                                    messages ?
                                    messages.map((message, index) => (
                                        <Card borderTopRightRadius={message.sender_id == receiver_id ? "" : "0"}
                                            borderTopLeftRadius={message.sender_id == receiver_id ? "0" : ""}
                                            // ref={index + 1 === messages.length ? lastMessageRef : null}
                                            key={index}
                                            justifySelf={message.sender_id == receiver_id ? "left" : "right"}
                                            backgroundColor="blue.600"
                                            color="white"
                                            >
                                            <CardBody>
                                                <Text>{message.content}</Text>
                                                {
                                                    !!message?.stepper_cards?.at(0)?.steps ? <StepperCard steps={message.stepper_cards.at(0).steps} /> : ""
                                                }
                                                <Text opacity={.7}>{formatDistanceToNow(parseISO(message.created_at), { addSuffix: true })}</Text>
                                            </CardBody>
                                        </Card>
                                    ))
                                    :
                                    (isLoading ? <Spinner /> : <Text>No messages yet.</Text>)
                                }
                            </Grid>
                            <InputGroup right="5%" width="90%" pos="absolute" bottom="1rem" background="none" borderRadius="1rem" boxShadow="0 1px 3px 2px rgba(0, 0, 0, 0.1)">
                                <InputLeftAddon p="0">
                                 {/* add attachment button */}
                                </InputLeftAddon>
                                <Input backgroundColor="white" value={message} onChange={e => setMessage(e.target.value)} />
                                <InputRightAddon p="0">
                                    <Button type="submit" borderLeftRadius={0} onClick={handleMessageSubmit}>
                                        <HugeiconsIcon icon={SentIcon} />
                                    </Button>
                                </InputRightAddon>
                            </InputGroup>
                        </CardBody>
                    </Card>
                </Grid>
            </Grid>
            <Grid height="100vh">
                <Heading>
                    Techstack
                </Heading>
            </Grid>
            <Grid height="100vh">
                <Card>
                    <CardHeader>
                        <Heading>About Me</Heading>
                    </CardHeader>
                    <CardBody>
                        I like programming.
                    </CardBody>
                </Card>
            </Grid>
        </Box>
    )
}