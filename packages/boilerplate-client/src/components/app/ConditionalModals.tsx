import * as React from 'react'
import { runInAction } from 'mobx'
import { InformationModal } from '@appkit-client/components/InformationModal'
import { SingleTextInputModal } from '@appkit-client/components/SingleTextInputModal'
import { LoginModal } from '@appkit-client/index'
import * as authModel from '@appkit-common/model/auth'
import { StoreContext } from '@bpc/index'
import { observer } from 'mobx-react-lite'

export const ConditionalModals = observer(() => {
  const store = React.useContext(StoreContext)
  return (
    <div>
      {[
        store.userStore.loginModalOpen && (
          <LoginModal
            key={0}
            closeModal={() => {
              runInAction(() => {
                store.userStore.loginModalOpen = false
              })
            }}
            callbackWithCredentials={(cred: authModel.Credentials) => {
              runInAction(() => {
                store.userStore.login({ credentials: cred })
              })
            }}
          />
        ),
        store.notificationStore.infoModalOpen && (
          <InformationModal
            key={1}
            title={store.notificationStore.infoModalTitle}
            message={store.notificationStore.infoModalMessage}
            onClose={store.notificationStore.closeInfoModal}
          />
        ),
        store.inputStore.singleTextInputOpen && (
          <SingleTextInputModal
            key={2}
            title="Input text"
            message="Message"
            returnWithTextValue={(val: string) => {
              store.inputStore.singleTextValueReturnCallback(val)
              store.inputStore.closeSingleTextInputModal()
            }}
            inputLabel="input label"
          />
        )
      ]}
    </div>
  )
})
