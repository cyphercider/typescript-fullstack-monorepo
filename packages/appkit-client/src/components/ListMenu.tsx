import * as React from 'react'
import { AppkitMenuItem } from '../model/menus'
import { List, ListItem, ListItemText } from '@material-ui/core'

interface ListMenuProps {
  menuItems: AppkitMenuItem[]
}

export const ListMenu = (props: ListMenuProps) => {
  return (
    <List>
      {props.menuItems.map(item => {
        return (
          <ListItem key={item.name} onClick={item.onClick} button>
            <ListItemText>{item.name}</ListItemText>
          </ListItem>
        )
      })}
    </List>
  )
}
