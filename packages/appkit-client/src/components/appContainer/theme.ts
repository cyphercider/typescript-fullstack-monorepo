import { createMuiTheme } from '@material-ui/core/styles'
import { Theme as MaterialUITheme } from '@material-ui/core'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import { MarkdownTheme } from '../../model/config'

export const blueMuiTheme: MaterialUITheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: blue,
    secondary: green
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: 'rgb(240,240,240)'
      }
    },
    MuiToolbar: {
      dense: {
        minHeight: '50px'
      },
      root: {
        minHeight: '50px'
      },
      regular: {
        height: '50px',
        minHeight: '50px'
      }
    },
    MuiTypography: {
      root: { margin: undefined },
      body1: { fontSize: '14px' },
      h1: {
        marginBlockEnd: '10px',
        marginBlockStart: '10px',
        fontSize: '64px'
      },
      h2: { marginBlockEnd: '10px', marginBlockStart: '10px', fontSize: '46px' }
    }
  }
})

export const blueMarkdownTheme: MarkdownTheme = {
  h1: {
    ...blueMuiTheme.typography.h2,
    marginTop: '25px',
    marginBottom: '25px'
  },
  h2: {
    ...blueMuiTheme.typography.h3,
    marginTop: '13px',
    marginBottom: '13px',
    fontWeight: 300
  },
  h3: { ...blueMuiTheme.typography.h5, marginTop: '7px', marginBottom: '7px' },
  h4: undefined,
  h5: undefined,
  h6: undefined,
  p: { ...blueMuiTheme.typography.body1, fontSize: '1rem' },
  li: { ...blueMuiTheme.typography.body1, fontSize: '1rem' }
}
