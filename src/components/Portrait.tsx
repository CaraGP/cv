import React from "react";

type PortraitProps = {
  name: string;
};

const Portrait = (props: PortraitProps) => {
  return (
    <img
      className="img-fluid profile-pic"
      src="images/cara.png"
      alt={props.name}
    />
  );
};

export default Portrait;
