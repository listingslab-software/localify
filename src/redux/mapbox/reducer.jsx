import { createReducer } from '@reduxjs/toolkit'
import {
  error,
} from "./actions"

export const mapboxSlice = {
  error: null,
}

const mapboxReducer = createReducer( mapboxSlice, {
  
  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { mapboxReducer }
