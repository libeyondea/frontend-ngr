import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import HocBongAnh from '../../components/HocBong/HocBongAnh';

const GalleryPage = () => {
    return (
        <Layout pageTitle="Tân Con Đường Vàng | Gallery">
            <NavOne />
            <PageHeader title="Du Học Anh" />
             <HocBongAnh/>
            <Footer />
        </Layout>
    );
};

export default GalleryPage;
