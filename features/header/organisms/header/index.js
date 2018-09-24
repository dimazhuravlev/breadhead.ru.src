import React from 'react'
import Logo from '../../atoms/logo'
import Navigation from '../../molecules/navigation'
import Button from '@site/ui/atoms/Button'
import './header.css'

class Header extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        <Navigation />
        <Button />
      </div>
    )
  }
}

export default Header
