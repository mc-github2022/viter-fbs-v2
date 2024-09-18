import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routesDeveloper } from "./routes/RoutesDeveloper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./components/store/StoreContext";

function App() {
  const queryClient = new QueryClient();
  const [count, setCount] = useState(0);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              {routesDeveloper.map(({ ...routesProps }, key) => {
                return <Route key={key} {...routesProps} />;
              })}
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
