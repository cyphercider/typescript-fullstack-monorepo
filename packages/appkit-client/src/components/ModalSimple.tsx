import * as React from 'react'
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent
} from '@material-ui/core'
import { ButtonSimple } from './ButtonSimple'

interface Props {
  title: string
  onClose: () => void
  /**
   * To display OK button separate from close button, supply a commit function
   */
  onCommit?: () => void
  children?: JSX.Element
}

export const ModalSimple = (props: Props) => {
  return (
    <Dialog
      id="modal-simple-dialog"
      aria-labelledby={props.title}
      open={true}
      onClose={props.onClose}
      PaperProps={{
        style: { minWidth: '50vw', minHeight: '30vh', marginTop: '-15vh' }
      }}
    >
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions>
        {props.onCommit && <ButtonSimple label="Ok" onClick={props.onCommit} />}
        <ButtonSimple
          label={props.onCommit != null ? 'Cancel' : 'Close'}
          onClick={props.onClose}
        />
      </DialogActions>
    </Dialog>
  )
}
