import { useState, useEffect } from "react";
import Questions from "./Questions";
import { useLoaderData, useOutletContext, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Quiz() {

    const data = useLoaderData();

    const {score, questionsAnswered}  = useOutletContext();

    const [scoreImage, setScoreImage] = useState("https://th.bing.com/th/id/R.fed0f2f592729b961dce67f0dd6e5f9c?rik=Ro5huxQvq5TI7w&riu=http%3a%2f%2fcliparting.com%2fwp-content%2fuploads%2f2016%2f10%2fThinking-clip-art-6.jpg&ehk=ESLre0SSYsS8xT%2fHMLydR90bPHl%2b9EEROXiDiyEjFJI%3d&risl=&pid=ImgRaw&r=0");
    const [questions, setQuestions] = useState([]);
    const [showScore, setShowScore] = useState(false);
    
    
    useEffect(() => {
      if (questionsAnswered === 10){
        setShowScore(true);
        if (score === 10) setScoreImage("https://th.bing.com/th/id/OIP.EfRyN1pEbOC-FiE3iPRwkwHaGl?rs=1&pid=ImgDetMain")
      }
    }, [questionsAnswered])


    function randomizeOptions(optionsArr){
  
      let randomOptions = [];
      let randomIndex = 0;
      while(optionsArr.length){
        let randomIndex = Math.floor(Math.random()*optionsArr.length)
        randomOptions.push(optionsArr[randomIndex]);
        optionsArr.splice(randomIndex,1);
      }
      
      return randomOptions;
    }

    useEffect(() => {
      // Initialize questions with randomized options
      const randomizedQuestions = data.map((item) => {
        const randomOptions = randomizeOptions([...item.incorrectAnswers, item.correctAnswer]);
        return { ...item, randomOptions };
      });
      setQuestions(randomizedQuestions);
    }, [data]);

  return (
    <main className="h-screen w-screen pt-24 flex justify-between gap-2">
      <motion.div className="Image w-1/2 h-full fixed"
      initial={{opacity:0}}
      animate={{opacity: 1}}
      >
      {/* <img id="clockImage" src="https://images.unsplash.com/photo-1518281361980-b26bfd556770?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="timer"/> */}
      </motion.div>
      {/* question section  */}
      <div id="scoreDiv" className="w-1/2 h-full flex flex-col gap-2 relative left-1/2">
      <AnimatePresence>
          {showScore ? (
            <motion.div
              key="score"
              initial={{opacity:0, x: "-40vw" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ x: "100vw" }}
              transition={{ duration: 0.5, delay: 0.5, type:"spring" }}
              className="flex justify-center flex-col gap-4 items-center text-4xl pt-24"
            >
              <div>Your score is {score}</div>
              <div>
                <a href="/quiz">
                  <button className="rounded-xl border border-black bg-yellow-200 p-2">
                    Try Again?
                  </button>
                </a>
              </div>
              <img className="w-60 rounded-xl" src={scoreImage} alt="" />
            </motion.div>
          ) : (
            questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ x: "100vw" }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <Questions
                  question={item.question.text}
                  options={item.randomOptions}
                  correctOption={item.correctAnswer}
                />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
      
    </main>
  );
}

export default Quiz;

export async function getQuiz(){
  const res = await fetch("https://the-trivia-api.com/v2/questions")
  const data = await res.json();
  return data;
}
