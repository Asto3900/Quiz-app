import './App.css';



import {
  Route,
  Routes
} from "react-router-dom";
import { app } from './firebase-config';
import Quiz from './Components/Quiz';
import Result from './Components/Common/Result';
import PlayQuiz from './Components/PlayQuiz';



function App() {
  return (
    <div className='app-main'>
    <Routes>
      <Route exact path='/' element={<Quiz />} />
      <Route exact path='/play' element={<PlayQuiz />} />
      <Route exact path='/results' element={<Result />} />
    </Routes>
  </div>
     
  
  )
}

export default App
