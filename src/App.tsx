import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cards from './pages/Cards/Cards';
import CardDetails from './pages/CardDetails/CardDetails';
import { Provider } from 'react-redux';
import store from './slices/index';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/card/:id' element={<CardDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
