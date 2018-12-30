import { Button as MuiButton } from '@material-ui/core'
import * as React from 'react'

export interface ButtonSimpleProps {
  label: string
  onClick: () => void
  noPadding?: boolean
}

export const ButtonSimple = (props: ButtonSimpleProps) => {
  const paddingOverride = props.noPadding === true ? '0px' : undefined
  return (
    <MuiButton
      style={{ paddingLeft: paddingOverride, paddingRight: paddingOverride }}
      onClick={props.onClick}
    >
      {props.label}
    </MuiButton>
  )
}
