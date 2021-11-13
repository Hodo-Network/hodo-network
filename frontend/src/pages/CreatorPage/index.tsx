import { useEffect, useState } from "react";
import { PureCreatorPage } from "./CreatorPage";

const CreatorPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <PureCreatorPage loading={loading} />;
};

export default CreatorPage;
