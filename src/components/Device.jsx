import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Typography,
    Collapse,
    IconButton,
    Grid,
} from '@material-ui/core/'
import { Icon } from '../theme'
import { getContent } from '../redux/app/actions'

const useStyles = makeStyles((theme) => ({
  panel: {
    margin: theme.spacing(),
  },
  padLeft:{
    marginLeft: theme.spacing(),
  },
  secColText: {
    color: theme.palette.secondary.main,
  },
}))

export default function Device() {
  
  const classes = useStyles()
  const [ expanded, setExpanded ] = React.useState( true )
  const appSlice = useSelector(state => state.app)
  const {
    darkMode,
  } = appSlice
  const contentObj = getContent( `device` )
  const {
    content,
    title,
  } = contentObj
  let helpIconColor = `secondary`
  if ( darkMode ) helpIconColor = `secondary`

  return <div className={ classes.panel }>
             <Grid container>
                <Grid item>
                  <IconButton
                    color={ helpIconColor }
                    onClick={ ( e ) => {
                      e.preventDefault()
                      setExpanded( !expanded )
                    }}
                  >
                    <Icon icon={`manager`} color={ helpIconColor } />
                  </IconButton>
                  <Typography variant={ `button` } className={ classes.padLeft }>
                    { title }
                  </Typography>                  
                </Grid>
            </Grid>
            <Collapse in={ expanded } timeout={ `auto` } unmountOnExit>
              <Typography variant={ `body1` } gutterBottom>
                { content }
              </Typography>
            </Collapse>
          </div>
}
