import React from "react";

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...otrherProps}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
    {...otrherProps}
  >
    {children}
  </button>
);

export default CustomButton;