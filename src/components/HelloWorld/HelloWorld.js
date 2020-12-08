import React from "react";
import PropTypes from "prop-types";

/** Super Hello World component */
const HelloWorld = ({ message }) => {
  return <div>Hello world {message}</div>;
};

HelloWorld.propTypes = {
  /** Message to display */
  message: PropTypes.string,
};

HelloWorld.defaultProps = {
  message: "Hello World",
};

export default HelloWorld;
