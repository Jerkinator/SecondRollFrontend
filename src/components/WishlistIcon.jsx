import { Icon } from "semantic-ui-react";
import React from "react";

const WishlistIcon = () => {
  const heartIcon = () => {
    <Icon enabled name="heart outline" size="big" />;
  };

  return <heartIcon />;
};

export default WishlistIcon;
