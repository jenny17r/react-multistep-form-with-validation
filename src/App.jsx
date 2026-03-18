import { useState } from 'react'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from "./step3";


function App() {
  const [currentstep, setCurrentStep] = useState(1)
  const [formData, setFormData]=useState({
    name:"",
    email:"",
    password:"",
  });

  const handleNext=()=>{
    if(currentstep=== 1){
      if(!formData.name|| !formData.email.includes("@")){
        alert("Please enter a valid name and email")
        return;
      }
    }
    if(currentstep<3){
      setCurrentStep(prevStep => prevStep + 1)
    }
    if(currentstep==3){
      alert("Form submitted successfully")
    }
  }
const handleBack=()=>{
 if(currentstep>1){
  setCurrentStep(prevstep=> prevstep - 1)
 }
}

  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gray-200 '>
        <div className='border-2 border-black-800 rounded-xl bg-white p-8'>
         <h1 className='p-2 text-2xl font-bold text-center'>
          step {currentstep} of 3
         </h1>
         <hr></hr>
         {currentstep === 1 && (
          <Step1 formData={formData} setFormData={setFormData} />
        )}
        {currentstep===2 && (
          <Step2 formData={formData} setFormData={setFormData} />
        )}
        {currentstep === 3 && <Step3 formData={formData} />}

          <hr></hr>
         <div className='flex flex-row justify-between items-center gap-4 p-3'>
          <button className='border px-3 bg-blue-100'
          onClick= {handleBack}
          >back</button>
          <button className='border px-3 bg-blue-500'
          onClick= {handleNext}
          >{currentstep === 3 ? "Finish" : "Next"}</button>
         </div>
        </div>
      </div>
    </>
  )
}

export default App
