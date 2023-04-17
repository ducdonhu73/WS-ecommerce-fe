import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "contexts/authContext";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import routes from "./router/route";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </QueryClientProvider>
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
