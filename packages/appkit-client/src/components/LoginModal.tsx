import * as React from 'react'
import { ModalSimple } from './ModalSimple'
import { TextFieldSimple } from './TextFieldSimple'
import { Credentials } from '@appkit-common/model/auth'

interface LoginModalProps {
  callbackWithCredentials: (cred: Credentials) => void
  closeModal: () => void
}

export const LoginModal = (props: LoginModalProps) => {
  const [userName, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const doCommit = () => {
    props.callbackWithCredentials({
      userName: userName,
      password: password
    })
    props.closeModal()
  }

  return (
    <ModalSimple
      title="Log In"
      onClose={() => {
        props.closeModal()
      }}
      onCommit={() => {
        doCommit()
      }}
    >
      <div id="login-modal-body">
        <TextFieldSimple
          onCtrlEnter={doCommit}
          autofocus
          label="User Name"
          currentValue={userName}
          updateValue={setUserName}
        />
        <TextFieldSimple
          onCtrlEnter={doCommit}
          label="Password"
          currentValue={password}
          updateValue={setPassword}
          passwordField
        />
      </div>
    </ModalSimple>
  )
}
