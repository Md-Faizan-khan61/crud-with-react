
import './App.css';
import Blog from './Components/Blogs/BlogHome';
import Crud from './Crud-app/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Create from './Crud-app/create';
import Update from './Crud-app/update';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Crud />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/update/:id" element={<Update />}></Route>
    </Routes>
   </Router>
  )
}

export default App;
