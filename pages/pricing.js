import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import CallToActionOne from "../components/CallToActionOne";

const PricingPage = () => {
    return (
        <Layout pageTitle="Kipso | Pricing">
            <NavOne />
            <PageHeader title="Pricing" />
            <Pricing />
            <CallToActionOne />
            <Footer />
        </Layout>
    );
};

export default PricingPage;
