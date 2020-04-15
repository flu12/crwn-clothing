import React from "react";

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn,inverted, ...otrherProps}) => (
  <button
    className={`${inverted ? 'inverted' : ''}
     ${isGoogleSignIn ? 'google-sign-in' : '' } 
     custom-button`}
    {...otrherProps}
  >
    {children}
  </button>
);

export default CustomButton;