import { useState } from 'react'
import CustomForm from './components/CustomForm'
import OneThing from './components/OneThing'
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()


function App() {
  const [thing, setThing] = useState("");
  const [isCompleted, setIsCompleted] = useState(true);
  const [completedThings, setCompletedThings] = useState([]);

  const getSuccessMessage = (e) => {
    return "Great Job!"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(false);
  }

  const handleInput = (e) => {
    setThing(e.target.value);
  }

  const handleCompletion = async (e) => {
    setCompletedThings(...completedThings, e.target.value);
    e.target.setAttribute('disabled', true);
    setThing(getSuccessMessage());
    await jsConfetti.addConfetti();
    setIsCompleted(true);
    setThing("");
  }

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        { isCompleted && ( <CustomForm thing={thing} 
                            handleInput={handleInput} 
                            handleSubmit={handleSubmit} /> )
        }
        { !isCompleted && ( <OneThing thing={thing} 
                            handleCompletion={handleCompletion} /> )
        }
      </div>
    </main>
  )
}

export default App
