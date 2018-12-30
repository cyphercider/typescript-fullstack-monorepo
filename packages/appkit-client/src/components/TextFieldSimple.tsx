import { TextField } from '@material-ui/core'
import * as React from 'react'

export interface TextFieldSimpleProps {
  label: string
  updateValue: (val: string) => void
  currentValue: string
  passwordField?: boolean
  onCtrlEnter?: () => void
  style?: React.CSSProperties
  id?: string
  autofocus?: boolean
}

export const TextFieldSimple = (props: TextFieldSimpleProps) => {
  return (
    <TextField
      onKeyUp={event => {
        if (event.ctrlKey && event.keyCode === 13) {
          if (props.onCtrlEnter != null) {
            props.onCtrlEnter()
          }
        }
      }}
      autoFocus={props.autofocus}
      type={props.passwordField ? 'password' : undefined}
      id={props.id}
      label={props.label}
      value={props.currentValue}
      onChange={(event: any) => {
        props.updateValue(event.target.value)
      }}
      style={{ width: '100%', ...props.style }}
    >
      {props.label}
    </TextField>
  )
}
