import * as React from 'react'
import { useAppPage } from '../context/AppPageContext'
import { Divider } from '@material-ui/core'
const markdownContent = require('./home/home_content.md')

export const Home = () => {
  const appPage = useAppPage()
  React.useEffect(() => console.log(`the page is ${JSON.stringify(appPage)}`), [
    appPage.page
  ])

  return (
    <div id="home">
      <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
      <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
    </div>
  )
}
