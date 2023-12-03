import React from "react";

// components
import PageContainer from "@/components/container/PageContainer";
import Banner from "@/components/organisms/Banners/Banner";
import LpHeader from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";

const Home = () => {
  return (
    <PageContainer>
      <LpHeader />
      <Banner />
      <Footer />
    </PageContainer>
  );
};

Home.layout = "Blank";
export default Home;
