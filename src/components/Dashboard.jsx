import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
} from '@material-ui/core/'
import { 
  TList,
  TView,
  TCreate,
} from './Trips'

const useStyles = makeStyles((theme) => ({
  dashboard: {
  },
  padded:{
    // paddingLeft: theme.spacing( 0.5 ),
    // paddingRight: theme.spacing( 0.5 ),
  }
}))

export default function Dashboard() {
  
  const classes = useStyles()
  const showCreate = false

  return <div className={ clsx( classes.dashboard ) } >
              <Grid container>

                { showCreate ? <Grid item xs={ 12 } className={ clsx( classes.padded ) } >
                  <TCreate />
                </Grid> : null }

                <Grid item xs={ 12 } md={ 6 } className={ clsx( classes.padded ) }>
                 <TView />
                </Grid>
                <Grid item xs={ 12 } md={ 6 } className={ clsx( classes.padded ) } >
                  <TList />
                </Grid>
                
              </Grid>
          </div>
}

/*
<Grid item xs={ 12 } md={ 6 } className={ clsx( classes.padded ) }>
                 <TCreate />
                </Grid>
*/