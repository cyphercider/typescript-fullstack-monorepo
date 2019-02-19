import * as React from 'react'
import { Typography } from '@material-ui/core'
import { ButtonSimple } from '@appkit-client/index'
import { StoreContext } from '@client/index'

export const ComponentsDemo = () => {
  const store = React.useContext(StoreContext)
  return (
    <div id="simple-components-showcase">
      <Typography variant="h2">Simple Components</Typography>
      <Typography>
        A showcase of simple wrapper components, which exposure minimal API
        surface area for just the component features you need.
      </Typography>
      <ButtonSimple
        noPadding
        label="Test Input Modal"
        onClick={() => {
          store.inputStore.openSingleTextInputModal(
            `test input`,
            (val: string) => {
              console.log(`got value ${val} from input`)
            }
          )
        }}
      />
    </div>
  )
}
