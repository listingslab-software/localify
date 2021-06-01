import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  newTrip: {
    margin: theme.spacing(),
  },
}))

export default function TripNew() {
  
  const classes = useStyles()


  return <div className={ clsx ( classes.newTrip ) }>
            New Trip
        </div>
}


