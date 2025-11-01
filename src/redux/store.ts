import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './auth/authSlice'
import carsReducer from './cars/carsSlise'
import notesReducer from './notes/notesSlice'
// import { getDefaultLocale } from 'react-datepicker'

const authPersistConfig = {
  key: 'auth',
  storage,
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  cars: carsReducer,
  notes: notesReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
