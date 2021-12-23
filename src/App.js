import { Home, DetailMovie, DetailTV, Upcoming } from "./pages";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detailMovie/:id" element={<DetailMovie/>}/>
        <Route path="/detailTV/:id" element={<DetailTV/>}/>
        <Route path="/upcoming" element={<Upcoming/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;