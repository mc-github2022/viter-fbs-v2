import Home from "@/components/pages/website/Home";
import { devNavUrl } from "../components/helpers/functions-general";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/`,
    element: <Home />,
  },
];
