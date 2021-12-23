import { Home, DetailMovie, DetailTV, Upcoming } from "./pages";
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return(
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movieWeb" element={<Home/>}/>
        <Route path="/detailMovie/:id" element={<DetailMovie/>}/>
        <Route path="/detailTV/:id" element={<DetailTV/>}/>
        <Route path="/upcoming" element={<Upcoming/>}/>
      </Routes>
  )
}

export default App;