import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
  hasAccess: boolean;
};

function PrivateRoute({children, hasAccess}: PrivateRouteProps): JSX.Element {
//   const hasAccess = false;

  return hasAccess ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
