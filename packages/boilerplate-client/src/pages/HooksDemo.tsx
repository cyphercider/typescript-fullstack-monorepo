import * as React from 'react'
import { Typography } from '@material-ui/core'
import { HooksTest } from './hooksDemo/HooksTest'

export const HooksDemo = () => {
  return (
    <div id="simple-components-showcase">
      <Typography variant="h2">Hooks Demo</Typography>
      <Typography>
        A simple example of usage of React 16.7.alpha hooks
      </Typography>
      <Typography>Hooks test</Typography>
      <HooksTest />
    </div>
  )
}
