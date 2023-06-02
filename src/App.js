import logo from './logo.svg';
import './App.css';
import Demo from './demo';
import FormState from './FormState';
import ApiCall from './ApiCall';
import AddData from './AddData';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleUser from './SingleUser';
import FomData from './FomData';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddData />}/>        
        <Route path="/singleuser/:id" element={<SingleUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
