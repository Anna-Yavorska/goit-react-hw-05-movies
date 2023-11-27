import { Toaster } from "react-hot-toast";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header/Header";
import { Layout } from "./Layout"
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Loader } from "./Loader";

export const AppLayout = () => {
    return (
      <Layout>
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <GlobalStyle />
        <Toaster />
      </Layout>
    );
}