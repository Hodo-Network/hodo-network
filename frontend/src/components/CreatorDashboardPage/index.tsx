import { useEffect, useState } from "react";
import { PureCreatorDashboardPage } from "./CreatorDashboardPage";

const CreatorDashboardPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <PureCreatorDashboardPage loading={loading} />;
};

export default CreatorDashboardPage;
