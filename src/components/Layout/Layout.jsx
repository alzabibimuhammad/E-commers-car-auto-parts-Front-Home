import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { Toaster } from 'react-hot-toast'
import ReactHotToast from '../../@core/react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Layout = () => {
const [queryClient]= React.useState(()=> new QueryClient)

  const x = {
    name: "sd;",
  };

  x.id = "sd";

  return (
    <Fragment>
      <Header />
      <div>
      <QueryClientProvider client ={queryClient}>
        <Routers />
   
        </QueryClientProvider>
        <ReactHotToast>
          <Toaster
            toastOptions={{
              className: "react-hot-toast",
              style: { color: "#fff" },
            }}
          />
        </ReactHotToast>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Layout;
