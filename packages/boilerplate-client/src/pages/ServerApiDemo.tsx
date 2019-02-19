import * as React from 'react'
import { Typography } from '@material-ui/core'
import { ButtonSimple } from '@appkit-client/index'
import * as serverApi from '@client/model/serverApi'
import { StoreContext } from '@client/index'
import { observer } from 'mobx-react-lite'

export const ServerApiDemo = observer(() => {
  const store = React.useContext(StoreContext)
  return (
    <div id="simple-components-showcase">
      <Typography variant="h2">Server Api Demo</Typography>
      <Typography variant="body1">
        A demo of some basic server API calls
      </Typography>
      <ButtonSimple
        label="Test Server Get"
        noPadding
        onClick={async () => {
          const res = await serverApi.getHello()
          store.notificationStore.displayInfoModal(
            'Server Response',
            JSON.stringify(res)
          )
          console.log(`Got response from server ${JSON.stringify(res)}`)
        }}
      />
    </div>
  )
})
