import React from "react";
import { useOutletContext } from "react-router-dom";

function Questions({question, options, correctOption}) {

  const {score, setScore, questionsAnswered, setQuestionsAnswered} = useOutletContext();
  
  function handleCorrection(e){
    e.preventDefault();
    let parentDiv = e.target.parentElement;
    const childOptions = Array.from(parentDiv.children);
  
    if (e.target.classList.contains("correctOption")){
      e.target.classList.add("bg-green-400", "text-white", "border-white");
      e.target.disabled = true
      for (const child of childOptions){
        if(child.classList.contains("correctOption")){
          child.classList.add("bg-green-400", "text-white", "border-white");
        }
        child.disabled = true;
      }
      setScore((prev)=>prev+1)
      setQuestionsAnswered((prev)=>prev+1)
      return
    } 
  
    setQuestionsAnswered((prev)=>prev+1);
    e.target.classList.add("bg-red-400", "text-white", "border-white");
  
    setTimeout(()=>{
      for (const child of childOptions){
        if(child.classList.contains("correctOption")){
        child.classList.add("bg-green-400", "text-white", "border-white");
        }
        child.disabled = true;
      }
    },250) 
  }

  return (
    <div className="h-fit font-[Inter] text-center p-10">
      <div className="question font-bold text-5xl text-left">
        {question}
      </div>

      <div className="options grid grid-cols-2 grid-rows-2 text-xl font-light gap-6 mt-8">
      {options.map((item, index)=>{
        return <button onClick={handleCorrection} key={index} className={item===correctOption? `border-2 correctOption rounded-3xl p-4 transition-all`: `border-2 rounded-3xl p-4 transition-all`}>
          {item}
        </button>
      })}
      </div>

      <hr className="mt-14" />
    </div>
  );
}

export default Questions;
