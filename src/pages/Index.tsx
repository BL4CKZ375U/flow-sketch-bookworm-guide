
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import RecentBooks from "@/components/home/RecentBooks";
import DepartmentSection from "@/components/home/DepartmentSection";
import HowItWorks from "@/components/home/HowItWorks";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <RecentBooks />
      <DepartmentSection />
      <HowItWorks />
    </Layout>
  );
};

export default Index;
