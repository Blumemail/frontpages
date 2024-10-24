import type { NextPage } from "next";
import { Nav } from "../components/navbar/navbar";
import { Layout } from "../components/navbar/layout";
import { Box } from "../components/styles/box";
import { Footer } from "../components/footer";
import { TermsStatement } from "../components/terms";

const TermsOfUse: NextPage = () => {
    return (
        <Layout>
            <Nav />
            <Box as="main">
                <TermsStatement />
            </Box>
            <Footer />
        </Layout>
    );
};

export default TermsOfUse;