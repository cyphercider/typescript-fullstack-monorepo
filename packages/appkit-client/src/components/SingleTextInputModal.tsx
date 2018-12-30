import * as React from 'react'
import { ModalSimple } from '@appkit-client/index'
import { TextFieldSimple } from '@appkit-client/components/index'

interface Props {
  title: string
  message: string
  returnWithTextValue: (val: string) => void
  inputLabel: string
  style?: React.CSSProperties
}

export const SingleTextInputModal = (props: Props) => {
  const [inputText, setText] = React.useState('')
  return (
    <ModalSimple
      title={props.title}
      onClose={() => {
        props.returnWithTextValue(inputText)
      }}
    >
      <TextFieldSimple
        autofocus
        onCtrlEnter={() => {
          props.returnWithTextValue(inputText)
        }}
        id="single-text-modal-input"
        label={props.inputLabel}
        updateValue={(val: string) => {
          setText(val)
        }}
        currentValue={inputText}
        style={props.style}
      />
    </ModalSimple>
  )
}
