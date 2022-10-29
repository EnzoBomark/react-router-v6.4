import React from "react";
import { Layout } from "./pages/Layout";
import { Outlet } from "react-router-dom";

export const LayoutRouter: React.FC = () => (
  <Layout>
    <Outlet />
  </Layout>
);
