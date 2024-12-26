import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { devNavUrl } from "./components/helpers/functions-general";
import EventsSingplePage from "./components/pages/website/events/EventsSingplePage";
import PostByCategory from "./components/pages/website/postByCategory/PostByCategory";
import SingplePage from "./components/pages/website/singlePage/SingplePage";
import PageNotFound from "./components/partials/PageNotFound";
import { StoreProvider } from "./components/store/StoreContext";
import { routesAdmin } from "./routes/RoutesAdmin";
import { routesDeveloper } from "./routes/RoutesDeveloper";
import { routesMarketing } from "./routes/RoutesMarketing";
import { RoutesWebsite } from "./routes/RoutesWebsite";

function App() {
  const queryClient = new QueryClient();
  const [count, setCount] = useState(0);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              {RoutesWebsite.map(({ ...routesProps }, key) => {
                return <Route key={key} {...routesProps} />;
              })}
              {routesDeveloper.map(({ ...routesProps }, key) => {
                return <Route key={key} {...routesProps} />;
              })}
              {routesAdmin.map(({ ...routesProps }, key) => {
                return <Route key={key} {...routesProps} />;
              })}
              {routesMarketing.map(({ ...routesProps }, key) => {
                return <Route key={key} {...routesProps} />;
              })}
              <Route path="*" element={<PageNotFound />} />
              <Route
                path={`${devNavUrl}/insight/:slug`}
                element={<SingplePage />}
              />
              <Route
                path={`${devNavUrl}/events-and-activities/:slug`}
                element={<EventsSingplePage />}
              />
              <Route
                path={`${devNavUrl}/post-by-category/:slug`}
                element={<PostByCategory />}
              />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
