import React from "react";
import Octicon from "react-octicon";

function OcticonIcon({ name, ...rest }) {
  return <Octicon name={name} {...rest} />;
}

export default OcticonIcon;
