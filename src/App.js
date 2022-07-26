// import './App.css';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import cartReducer from './components/reducer/cartReducer';
import laptopItemReducer from './components/reducer/laptopItemReducer';
import mobileItemReducer from './components/reducer/mobileItemReducer';
import Path from './Path';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const persistConfig = {
    key: 'root',
    storage,
  }
  const all_combine = combineReducers({
    laptop_item_store: laptopItemReducer,
    mobile_item_store: mobileItemReducer,
    cart_store: cartReducer,

  })
  const persistedreducer = persistReducer(persistConfig, all_combine)
  const combine_store = createStore(persistedreducer);
  let combine_persistor = persistStore(combine_store)
  // const combine_store = createStore(all_combine);



  return (
    <div className="App">
      <PersistGate persistor={combine_persistor}>
        <Provider store={combine_store}>
          <Path />
        </Provider>
      </PersistGate>



    </div>
  );
}

export default App;
