import React from "react";
import { Alert } from "../index";

export const SiteAlert = () => {
  const [isHidden, setIsHidden] = React.useState(false);

  const onClose = () => {
    setIsHidden(true);
  };

  return (
    <Alert
      hidden={isHidden}
      message={`Site is coming soon. You're currently viewing an early prototype.`}
      status='warning'
      onClose={onClose}
    />
  );
};
