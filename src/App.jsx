import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routesDeveloper } from "./routes/RoutesDeveloper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./components/store/StoreContext";
import SingplePage from "./components/pages/website/singlePage/SingplePage";
import EventsSingplePage from "./components/pages/website/events/EventsSingplePage";
import BatchSliderPage from "./components/pages/website/lcssPage/BatchSliderPage";
import { devNavUrl } from "./components/helpers/functions-general";
import PostByCategory from "./components/pages/website/postByCategory/PostByCategory";
import { routesAdmin } from "./routes/RoutesAdmin";
import PageNotFound from "./components/partials/PageNotFound";
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
              {/* {routesDeveloper.map(({ ...routesProps }, key) => {
                return <Route key={key} {...routesProps} />;
              })} */}
              {routesAdmin.map(({ ...routesProps }, key) => {
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
