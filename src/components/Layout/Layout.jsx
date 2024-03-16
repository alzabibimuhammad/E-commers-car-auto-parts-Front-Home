import React, { Fragment, createContext, useEffect, useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { Toaster } from "react-hot-toast";
import ReactHotToast from "../../@core/react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GetProfileApi from "../../features/profile/api/getProfileAPI";

export const UserContext = createContext();

const Layout = () => {
  const [queryClient] = React.useState(() => new QueryClient());
  
  const [user , setUser] = useState()
  
  useEffect(() => {
    GetProfileApi().then(data => setUser(data?.data))
  }, []);


  return (
    <Fragment>
      <Header />
      <div>
        <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={user} >  
            <Routers />
        </UserContext.Provider>
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
