import type { NextPage } from "next";
import { Layout } from "../components/navbar/layout";
import { Box } from "../components/styles/box";

const Problems: NextPage = () => {
    return (
        <Layout>
            <Box as="main">
                <Text h1 css={{ textAlign: 'center' }}>
                    Blumemail is experiencing technical difficulties.
                </Text>
                <Text h3 css={{ textAlign: 'center' }}>
                    We're extremely sorry for the inconvenience. We're working on it as fast as we can!
                </Text>
            </Box>
        </Layout>
    );
};

export default Problems;