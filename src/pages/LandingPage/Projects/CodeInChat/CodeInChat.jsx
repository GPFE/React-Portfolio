import {
  InputGroup,
  Flex,
  InputRightAddon,
  InputLeftAddon,
  Input,
  Button,
  Box,
  Card,
  SkeletonCircle,
  Heading,
  Grid,
  Text,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SentIcon } from "@hugeicons/core-free-icons";
import { formatDistanceToNow, parseISO } from "date-fns";

export default function CodeInChat() {
  const [message, setMessage] = useState("");
  const lastMessageRef = useRef(null)
  const [messages, setMessages] = useState([
    {
      id: 2,
      content: "Hello!",
      sender_id: 2,
      created_at: "2025-05-18T12:41:38.335Z",
      updated_at: "2025-05-18T12:41:38.335Z",
      receivable_id: 1,
      receivable_type: "User",
      stepper_cards: [],
    },
    {
      id: 2,
      content: "Do like my portfolio so far?",
      sender_id: 2,
      created_at: "2025-05-18T12:41:38.335Z",
      updated_at: "2025-05-18T12:41:38.335Z",
      receivable_id: 1,
      receivable_type: "User",
      stepper_cards: [],
    },
  ]);

  useEffect(() => {
    if (lastMessageRef) {
        lastMessageRef.current.scrollIntoView()
    }
  }, [lastMessageRef])

  const receiver_id = 2;
  const isLoading = false;

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    setMessages([
      ...messages,
      {
        content: message,
        sender_id: 1,
        created_at: (new Date).toISOString(),
        updated_at: (new Date).toISOString(),
        receivable_id: 2,
        receivable_type: "User",
        stepper_cards: [],
      },
    ]);
    setMessage("");
  };

  return (
    <Card height="100%">
      <CardHeader>
        <Heading>CodeInChat</Heading>
      </CardHeader>
      <CardBody height="100%">
        <Flex flexDirection="column" height="80%" gap="1rem" maxH="75%" overflow="auto">
          {messages ? (
            messages.map((message, index) => (
              <Card
                borderTopRightRadius={
                  message.sender_id == receiver_id ? "" : "0"
                }
                borderTopLeftRadius={
                  message.sender_id == receiver_id ? "0" : ""
                }
                ref={index + 1 === messages.length ? lastMessageRef : null}
                key={index}
                alignSelf={message.sender_id == receiver_id ? "start" : "end"}
                backgroundColor="blue.600"
                color="white"
              >
                <CardBody>
                  <Text>{message.content}</Text>
                  {!!message?.stepper_cards?.at(0)?.steps ? (
                    <StepperCard steps={message.stepper_cards.at(0).steps} />
                  ) : (
                    ""
                  )}
                  <Text opacity={0.7}>
                    {formatDistanceToNow(parseISO(message.created_at), {
                      addSuffix: true,
                    })}
                  </Text>
                </CardBody>
              </Card>
            ))
          ) : isLoading ? (
            <Spinner />
          ) : (
            <Text>No messages yet.</Text>
          )}
        </Flex>
        <InputGroup
          right="5%"
          width="90%"
          pos="absolute"
          bottom="1rem"
          background="none"
          borderRadius="1rem"
          boxShadow="0 1px 3px 2px rgba(0, 0, 0, 0.1)"
          as="form"
          onSubmit={handleMessageSubmit}
        >
          <InputLeftAddon p="0">{/* add attachment button */}</InputLeftAddon>
          <Input
            backgroundColor="white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <InputRightAddon p="0">
            <Button
              type="submit"
              borderLeftRadius={0}
              _hover={{
                  bgGradient: "linear(to-r, orange.500, orange.400, yellow.300)"
              }}
            >
              <HugeiconsIcon icon={SentIcon} />
            </Button>
          </InputRightAddon>
        </InputGroup>
      </CardBody>
    </Card>
  );
}
