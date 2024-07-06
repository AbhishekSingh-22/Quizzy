import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import {useState } from 'react'

function App() {
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // function updateScore(correct){
  //   setQuestionsAnswered((prev)=> prev+1);
  //   if (correct) {
  //     setScore((prev) => prev+1);
  //   }
  // }

  return (
    <>
      <Header/>
      <Outlet context={{score, setScore, questionsAnswered, setQuestionsAnswered}} />
    </>
  )
}

export default App
