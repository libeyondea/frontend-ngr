import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import TuyenDungDetails from '../components/TDDetails';

const NewsPage = () => {
    return (
        <Layout pageTitle="Tân Con Đường Vàng | Tuyển Dụng">
            <NavOne />
            <PageHeader title="Tuyển Dụng" />
            <TuyenDungDetails />
            <Footer />
        </Layout>
    );
};

export default NewsPage;