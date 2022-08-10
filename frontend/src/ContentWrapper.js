// import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
// import { useParams } from "react-router-dom";
// import { ROUTE_DEFAULT } from "./constants/routes";
// import routes from "./routes";
// import Breadcrumbs from "./components/Breadcrumbs";
// import { useAppSelector } from "./state/hooks";

export default function ContentWrapper({ children }) {
  // const match = useRouteMatch();
  // const params = useParams();
  // const location = useLocation();
  const { pathname } = useLocation();
  // const [crumbs, setCrumbs] = useState([]);
  // const collections = useAppSelector((state) => state.collections.data);
  // const asset = useAppSelector((state) => state.asset.data);
  const matchHome = pathname === '/';

  // useEffect(() => {
  //   setCrumbs(getCrumbs());
  // }, [location]);

  // const getCrumbs = () => {
  //   return (
  //     routes
  //       // Get all routes that contain the current one.
  //       .filter(({ path }) => match.path.includes(path))
  //       .map(({ path, name, ...rest }) => ({
  //         // Swap out any dynamic routes with their param values.
  //         // E.g. "/assets/:contractAddress" will become "/assets/0x..."
  //         path: Object.keys(params).length
  //           ? Object.keys(params).reduce(
  //               (path, param) => path.replace(`:${param}`, params[param]),
  //               path
  //             )
  //           : path,
  //         // Swap out any dynamic route names with their param values.
  //         // E.g. ":contractAddress" will become "0x..."
  //         // E.g. ":tokenId" will become "Asset Name"
  //         name: Object.keys(params).length
  //           ? Object.keys(params).reduce((name, param) => {
  //               // TODO: doesn't update name on page change
  //               // if (param === "tokenId") {
  //               //   return name.replace(`:${param}`, asset.data.name);
  //               // } else
  //               if (param === "contractAddress") {
  //                 let collection = collections?.data.find(
  //                   (item) => item.contractAddress === params[param]
  //                 );
  //                 return name.replace(`:${param}`, collection?.name);
  //               } else {
  //                 return name.replace(`:${param}`, params[param]);
  //               }
  //             }, name)
  //           : name,
  //         ...rest,
  //       }))
  //       .map(({ path, ...rest }) => ({
  //         path,
  //         current: [path].includes(location.pathname),
  //         isHome: path === ROUTE_DEFAULT,
  //         ...rest,
  //       }))
  //   );
  // };

  if (matchHome) {
    return <main className='min-w-0 flex-1 overflow-y-scroll'>{children}</main>;
  }

  return (
    <>
      {/* <Breadcrumbs crumbs={crumbs} /> */}
      <main className='min-w-0 flex-1 overflow-y-scroll'>{children}</main>
    </>
  );
}
