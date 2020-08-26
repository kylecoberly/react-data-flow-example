import React from "react"


import NavItem from "./NavItem"

export default class Nav extends React.Component {
  state = {
    navItems: [{
      id: 1,
      label: "Home",
      isActive: false,
    },{
      id: 2,
      label: "Store",
      isActive: false,
    },{
      id: 3,
      label: "Blog",
      isActive: false,
    }]
  }

  toggleActive = id => {
    this.setState({
      navItems: this.state.navItems.map(navItem => {
        return (navItem.id === id)
          ? {
            ...navItem,
            isActive: !navItem.isActive
          }
          : navItem
      })
    })
  }

  render(){
    const $navItems = this.state.navItems.map(({id, isActive, label}) => {
      return <li>
        <NavItem
          key={id}
          id={id}
          isActive={isActive}
          label={label}
          toggleActive={this.toggleActive}
        />
      </li>
    })

    return (
      <nav>
        <ul>
          {$navItems}
        </ul>
      </nav>
    )
  }
}

