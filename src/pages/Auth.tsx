
import React from "react";
import Layout from "@/components/layout/Layout";
import { AuthTabs } from "@/components/auth/AuthForms";
import { Card, CardContent } from "@/components/ui/card";

const Auth = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-univblue mb-2">
              Welcome to UniBooks
            </h1>
            <p className="text-gray-600">
              Sign in or create an account to get started
            </p>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <AuthTabs />
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
