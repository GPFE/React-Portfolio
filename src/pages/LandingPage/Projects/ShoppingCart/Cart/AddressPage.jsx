import { Card, CardBody, Grid, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function AddressPage() {
    return(
        <Card height="100%" display="flex" flexDirection="column" minHeight={0}>
            <CardBody height="100%" display="flex" flexDirection="column" p={0} minHeight={0}>
                <Grid flex={1} minHeight={0} gap="1rem">
                    <Card minHeight={0}>
                        <CardBody>
                            <FormControl isRequired>
                                <FormLabel>Full Name</FormLabel>
                                <Input />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" />
                            </FormControl>
                        </CardBody>
                    </Card>
                    <Card minHeight={0}>
                        <CardBody>
                            <FormControl isRequired>
                                <FormLabel>Country</FormLabel>
                                <Input />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>City</FormLabel>
                                <Input />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Street</FormLabel>
                                <Input />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Street number</FormLabel>
                                <Input type="number" />
                            </FormControl>
                        </CardBody>
                    </Card>
                </Grid>
            </CardBody>
        </Card>
    )
}