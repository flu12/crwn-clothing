import React from "react";
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { createStructuredSelector } from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util'
import CartIcon from "../cart-icon/cart-icon.compnent";
import CartDropdown from "../cart-dropdown/cart-dropdwon.component";
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) =>(
  <div className='header'>
    <Link className = 'logo-container' to="/">
      <Logo className = 'logo'/>
    </Link>
    <div className='options'>
      <Link className='options' to='/shop'>
        SHOP
      </Link>
      <Link className='options' to='/shop'>
        CONTACT
      </Link>
        {
          currentUser ? (
            <div className='option' onClick={() => auth.signOut() }>
              SIGN OUT
            </div>
            ):(
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )
        }
        <CartIcon/>
    </div>
    {
      hidden ? null : <CartDropdown/>
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);