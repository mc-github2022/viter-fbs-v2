import { devNavUrl } from "../components/helpers/functions-general";
import ProtectedRouteOther from "../components/pages/access/ProtectedRouteOther";
import CreateOtherPassword from "../components/pages/access/user-other/CreateOtherPassword";
import OtherUserForgetPassword from "../components/pages/access/user-other/OtherUserForgetPassword";
import OtherUserLogin from "../components/pages/access/user-other/OtherUserLogin";
import Subscribers from "../components/pages/developer/subscribers/Subscribers";

export const routesMarketing = [
  {
    path: `${devNavUrl}/subscribers`,
    element: (
      <ProtectedRouteOther>
        <Subscribers />
      </ProtectedRouteOther>
    ),
  },

  // LOGIN PAGES
  {
    path: `${devNavUrl}/login`,
    element: <OtherUserLogin />,
  },
  {
    path: `${devNavUrl}/forgot-password`,
    element: <OtherUserForgetPassword />,
  },
  {
    path: `${devNavUrl}/create-password`,
    element: <CreateOtherPassword />,
  },
];
