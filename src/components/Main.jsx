import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
} from '@material-ui/core/'
import {
  Mapbox
} from './'

const useStyles = makeStyles((theme) => ({
  main: {
    // border: '1px solid red',
  },
}))

export default function Main() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    open,
  } = appSlice
  if ( open ) console.log( 'open', open )

  return <div className={ classes.main }>
          <Mapbox />
        </div>
}
