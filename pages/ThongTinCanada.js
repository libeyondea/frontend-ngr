import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import ThongTinCa from "../components/ThongTinCa";

const ThongTinCanada = () => {
    return (
        <Layout pageTitle="Tân Con Đường Vàng | Thông tin Canada">
            <NavOne />
            <PageHeader title="Thông tin Canada" />
            <ThongTinCa />
            <Footer />
        </Layout>
    );
};

export default ThongTinCanada;