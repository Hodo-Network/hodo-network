import { useEffect, useState } from "react";
import { useParams, useRouteMatch, useLocation } from "react-router-dom";
import { ROUTE_DEFAULT } from "./constants/routes";
import routes from "./routes";
import Breadcrumbs from "./components/Breadcrumbs";

export default function ContentWrapper({ children }) {
  const match = useRouteMatch();
  const params = useParams();
  const location = useLocation();
  const [crumbs, setCrumbs] = useState([]);

  const matchHome = useRouteMatch({
    path: "/",
    exact: true,
  });

  useEffect(() => {
    setCrumbs(getCrumbs());
  }, [location]);

  const getCrumbs = () => {
    return (
      routes
        // Get all routes that contain the current one.
        .filter(({ path }) => match.path.includes(path))
        .map(({ path, name, ...rest }) => ({
          // Swap out any dynamic routes with their param values.
          // E.g. "/collections/:name" will become "/collections/country"
          path: Object.keys(params).length
            ? Object.keys(params).reduce(
                (path, param) => path.replace(`:${param}`, params[param]),
                path
              )
            : path,
          // Swap out any dynamic route names with their param values.
          // E.g. ":name" will become "country"
          // E.g. ":id" will become "Asset Name"
          name: Object.keys(params).length
            ? Object.keys(params).reduce((name, param) => {
                // if (param === "id") {
                //   const asset = getAsset(params[param]);
                //   return name.replace(`:${param}`, asset.name);
                // } else {
                //   return name.replace(`:${param}`, params[param]);
                // }
                return name.replace(`:${param}`, params[param]);
              }, name)
            : name,
          ...rest,
        }))
        .map(({ path, ...rest }) => ({
          path,
          current: [path].includes(location.pathname),
          isHome: path === ROUTE_DEFAULT,
          ...rest,
        }))
    );
  };

  if (matchHome) {
    return <main className='min-w-0 flex-1 overflow-y-scroll'>{children}</main>;
  }

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <main className='min-w-0 flex-1 overflow-y-scroll'>{children}</main>
    </>
  );
}
