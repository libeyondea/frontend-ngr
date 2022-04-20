import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Visa from "../components/Visa";

const VisaCa = () => {
    return (
        <Layout pageTitle="Tân Con Đường Vàng | Visa Canada">
            <NavOne />
            <Visa />
            <Footer />
        </Layout>
    );
};

export default VisaCa;