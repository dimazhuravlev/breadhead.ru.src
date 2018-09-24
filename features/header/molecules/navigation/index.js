import React from 'react'
import NavigationLink from './atoms/navigation_link'

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavigationLink />
        </div>
        <div>
          <NavigationLink />
        </div>
        <div>
          <NavigationLink />
        </div>
      </div>
    )
  }
}

export default Navigation
