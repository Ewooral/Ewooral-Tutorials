import React, { ReactNode } from 'react'
import { Link } from 'gatsby'

import { CBadge, CNavGroup, CNavItem, CSidebarNav } from '@coreui/react-pro/src/index'
import CIcon from '@coreui/icons-react'

export type Badge = {
  color: string
  text: string
}

export type NavItem = {
  name: string | JSX.Element
  icon?: string | JSX.Element
  badge?: Badge
  to: string
  items?: NavItem[]
}

interface SidebarNavProps {
  items: NavItem[]
  currentRoute: string
}

export const SidebarNav = ({ items, currentRoute }: SidebarNavProps) => {
  const navLink = (name: string | JSX.Element, icon: string | ReactNode, badge?: Badge) => {
    return (
      <>
        {icon && typeof icon === 'string' ? <CIcon name={icon} customClassName="nav-icon" /> : icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item: NavItem, index: number) => {
    const { name, badge, icon, ...rest } = item
    return (
      <CNavItem component={Link} activeClassName="active" key={index} {...rest}>
        {navLink(name, icon, badge)}
      </CNavItem>
    )
  }

  const navGroup = (item: NavItem, index: number) => {
    const { name, icon, to, ...rest } = item
    return (
      <CNavGroup
        compact
        toggler={navLink(name, icon)}
        visible={to.startsWith(currentRoute)}
        idx={String(index)}
        key={index}
        {...rest}
      >
        {item.items?.map((item: NavItem, index: number) =>
          item.items ? navGroup(item, index) : navItem(item, index),
        )}
      </CNavGroup>
    )
  }

  return (
    <CSidebarNav>
      {items &&
        items.map((item: NavItem, index: number) =>
          item.items ? navGroup(item, index) : navItem(item, index),
        )}
    </CSidebarNav>
  )
}
