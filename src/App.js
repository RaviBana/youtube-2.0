import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from './components/SearchResult';
import VedioDetail from './components/VedioDetail';

function App() {
  return (
   
      
       <BrowserRouter>
        <Header />
       <Routes>

          <Route path = '/' element={<MainContainer/>} exact/>
          <Route
                            path="/searchResult/:searchQuery"
                            element={<SearchResult />}
                        />
            <Route path='/video/:id' element={<VedioDetail/>}/>
       </Routes>
       
       </BrowserRouter>
    
  );
}

export default App;
