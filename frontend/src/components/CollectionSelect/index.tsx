// import { useHistory, useLocation } from "react-router-dom";
import { PureCollectionSelect } from "./CollectionSelect";
import { collections } from "../../data/collections";

const CollectionSelect = () => {
  // const history = useHistory();
  // const location = useLocation();

  const onChange = () => {
    alert("Selection change");
    // const val = "test";
    // const href = `/collections/${val}`;
    // if (![href].includes(location.pathname)) {
    //   history.push(href);
    // }
  };

  return <PureCollectionSelect collections={collections} onChange={onChange} />;
};

export default CollectionSelect;
