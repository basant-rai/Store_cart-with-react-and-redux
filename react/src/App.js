// import './App.css';
import { Provider } from 'react-redux';
import MyRoutes from './MyRoutes';
import store from './Redux/Store';

function App() {
  return (
    <Provider store ={store}>
      <MyRoutes/> 
    </Provider>
  );
}

export default App;
