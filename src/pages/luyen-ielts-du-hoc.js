import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

import Luyenieltsduhoc from "../components/daotao/luyenieltsduhoc";


const TeachersDetailsPage = () => {
    return (
        <Layout pageTitle="Tân Con Đường Vàng | Teachers Details">
            <NavOne />
            <PageHeader title="Luyện thi tiếng anh" />
            <Luyenieltsduhoc />
            <Footer />
        </Layout>
    );
};

export default TeachersDetailsPage;
