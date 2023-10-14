import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import NotePage from "./pages/NotePage";

const App = () => {
  return (
    <Router>
      <div className='container dark'>
        <div className="app">
          <Header />
          <Routes>
            <Route path='/' exact element={<NotesListPage/>} />
            <Route path='note/:id' element={<NotePage />}/>
          </Routes>
        </div>
      
      
    </div>
    </Router>
    
  );
};

export default App;
