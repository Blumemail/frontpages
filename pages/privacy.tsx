import type { NextPage } from "next";
import { Nav } from "../components/navbar/navbar";
import { Layout } from "../components/navbar/layout";
import { Box } from "../components/styles/box";
import { Footer } from "../components/footer";
import { PrivStatement } from "../components/privacy";

const Privacy: NextPage = () => {
    return (
        <Layout>
            <Nav />
            <Box as="main">
                <PrivStatement />
            </Box>
            <Footer />
        </Layout>
    );
};

export default Privacy;