import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import { BiSearch } from 'react-icons/bi';
import { BsHandbag } from 'react-icons/bs';
import { connect } from 'react-redux';

function Header({cartLength}) {
  return (
    <div>
      <div>
        <HamburgerMenu/>
      </div>
      <div>
        <div>
          <BiSearch/>
        </div>
        <div>
          <BsHandbag/>
          <div>{cartLength ? `${cartLength}` : ''}</div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    cartLength: state.cart.length
  }
};

export default connect(mapStateToProps, null)(Header);
