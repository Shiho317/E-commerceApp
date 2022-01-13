import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

function HamburgerMenu() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
    </div>
  )
}

export default HamburgerMenu
