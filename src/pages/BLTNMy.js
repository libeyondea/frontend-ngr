import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Baolanhnhanthan from "../components/Baolanhnhanthan";

const baolanhnhanthan = () => {
    return (
        <Layout pageTitle="Tân Con Đường Vàng | Bảo Lãnh Thân Nhân">
            <NavOne />
            <Baolanhnhanthan />
            <Footer />
        </Layout>
    );
};

export default baolanhnhanthan;