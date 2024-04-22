import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Transaction from "./components/Transaction/Transaction";
import Graph from "./components/Graph/Graph";
import Categories from "./components/Categories/Categories";
import Trash from "./components/Trash/Trash";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<RegisterPage/>} />
            <Route path="/dashboard" element={<HomePage/>} >
               <Route  path=""  element={<Transaction/>}/>
               <Route  path="graph"  element={<Graph/>}/>
               <Route  path="categories"  element={<Categories/>}/>
               <Route  path="trash"  element={<Trash/>}/>
               <Route  path="settings"  element={<Settings/>}/>
            </Route>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
