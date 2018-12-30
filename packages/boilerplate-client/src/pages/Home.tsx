import * as React from 'react'
import { Divider } from '@material-ui/core'
const markdownContent = require('./home/home_content.md')

export const Home = () => {
  return (
    <div id="home">
      <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
      <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
    </div>
  )
}
