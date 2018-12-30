import * as React from 'react'
import { ModalSimple } from '@appkit-client/index'
import { Typography } from '@material-ui/core'

interface Props {
  title: string
  message: string
  onClose: () => void
}

export const InformationModal = (props: Props) => {
  return (
    <ModalSimple title={props.title} onClose={props.onClose}>
      <Typography>{props.message}</Typography>
    </ModalSimple>
  )
}
