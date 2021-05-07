import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { Breadcrumbs } from "../components";
import routes from "./routes";
import { collectibles } from "../data";

export default function ContentWrapper({ children }) {
  const match = useRouteMatch();
  const params = useParams();

  const getAsset = (id) => {
    return collectibles.filter((asset) => {
      return asset.id === id;
    })[0];
  };

  const crumbs = routes
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
            if (param === "id") {
              const asset = getAsset(params[param]);
              return name.replace(`:${param}`, asset.name);
            } else {
              return name.replace(`:${param}`, params[param]);
            }
          }, name)
        : name,
      ...rest,
    }));

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <main className='min-w-0 flex-1 overflow-y-scroll'>{children}</main>
    </>
  );
}
