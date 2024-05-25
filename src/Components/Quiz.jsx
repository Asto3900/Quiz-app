import React from "react";
import Select from "./Common/Select";
import Input from "./Common/Input"
import Difficultyselect from "./Common/DifficultySelect"
import Button from '@mui/material/Button';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Quiz() {
  const navigate = useNavigate()
  const [quizCount, setquizCount] = React.useState("");
  const [quizType, setQuizType] = React.useState("");
  const [quizDifficulty, setquizDifficulty] = React.useState("");
  const [playerName, setPlayerName] = React.useState("")
 
  const handleChange  = (event) => {
    setQuizType(event.target.value);
  };
  const handleDifficulty  = (event) => {
    setquizDifficulty(event.target.value);
  };
  const getPlayerName = (value) => {
    setPlayerName(value)
    localStorage.setItem('Playername', value)
}

const getQuiz = () => {
  if (playerName) {
      axios.get(
          `https://opentdb.com/api.php?amount=${quizCount}&difficulty=${quizDifficulty}&category=${quizType}`)
          .then((response) => {
              navigate('/play',
                  {
                      state: {
                          quizData: response.data.results,
                          quizCount: quizCount,
                          quizType: quizType,
                          quizDifficulty: quizDifficulty
                      }
                  })
          })
  }
  else {
      toast.error(`Please Enter the Player's Name`)
  }
}
  return (
    <div className='quiz-main'>
    <ToastContainer />
    <h1>Asto Quiz App</h1>
    <TextField
        required
        style={{ marginBottom: 20 }}
        fullWidth
        id="outlined-basic"
        label="Enter Your Name"
        variant="outlined"
        onChange={(e) => getPlayerName(e.target.value)}
        value={playerName}
    />

      
      <Input
       setquizCount = {setquizCount} 
       quizCount ={quizCount}
       />
      <Select       
        quizType={quizType}
        handleChange={handleChange}
      />
      <Difficultyselect
      quizDifficulty = {quizDifficulty}
      handleChange = { handleDifficulty}
      />
      <Button
      onClick={getQuiz}
       variant="contained" 
       style={{marginTop: 10, marginRight: 5}}>
        GET QUIZ
       </Button>

       <Button
                onClick={() => navigate('/results')}
                variant="contained"
                style={{ marginTop: 10, marginLeft: 5 }}>
                CHECK LEADERBOARD
            </Button>
    </div>
  );
}

export default Quiz;
