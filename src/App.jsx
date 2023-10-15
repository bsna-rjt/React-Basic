import './App.css'
// import {BrowserRouter, Routes, Route, RouterProvider} from 'react-router-dom';
// import Home from './Home';
import {RouterProvider} from 'react-router-dom';
import {router} from './routes';

function App() {

  // return (
  //  <BrowserRouter>
  //  <Routes>
  //   <Route path="/" element={<Home />}/>
  //   <Route path="/about" element={<h2>About Page</h2>}/>
  //   <Route path="/contact" element={<h1>Contact Page</h1>}/>
  //  </Routes>
  //  </BrowserRouter>
  // )
  <RouterProvider router={router}/>
}

export default App
