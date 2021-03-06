import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  overlay,
  darkMode,
  config,
  configLoading,
  configLoaded,
  path,
} from "./actions"

export const appSlice = {
  error: null,
  darkMode: false,
  overlay: false,
  config: null,
  configLoading: false,
  configLoaded: false,
  path: `/`,
}

const appReducer = createReducer( appSlice, {

  [path]: (state, action) => {
    state.path = action.path
    return state
  },
  
  [error]: (state, action) => {
    state.error = action.error
    return state
  },

  [config]: (state, action) => {
    state.config = action.config
    return state
  },

  [configLoading]: (state, action) => {
    state.configLoading = action.configLoading
    return state
  },

  [configLoaded]: (state, action) => {
    state.configLoaded = action.configLoaded
    return state
  },
  
  [darkMode]: (state, action) => {
    state.darkMode = action.darkMode
    return state
  },

  [overlay]: (state, action) => {
    state.overlay = action.overlay
    return state
  },

})

export { appReducer }
