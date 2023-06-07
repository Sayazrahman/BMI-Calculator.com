import React, { useState } from 'react'
export default function MAIN() {

  const [height, setheight] = useState(0)
  const [weight, setweight] = useState(0)
  const [bmi, setbmi] = useState('')
  const [result, setresult] = useState('')
  // const [tips, settips] = useState('')

  
  let calcBMI = (e)=>{
    e.preventDefault();
    if(height=== 0|| weight===0){
      alert('please enter valid details')

    }
    else{
     let bmi = (weight/(height/100)**2)
      setbmi(bmi.toFixed(1))

      if( bmi<18.5 ){
        setresult( 'You are Undeweight')
        document.getElementById('progressbar').style.backgroundColor= 'red'
      }
       else if (bmi <= 24.5  && bmi >=18.5) {
        setresult( 'You are Healthy')
        document.getElementById('progressbar').style.backgroundColor= 'green'
      }
        else if (bmi <= 29.9 && bmi >=25) {
        setresult( 'You are overweight')
        document.getElementById('progressbar').style.backgroundColor= 'red'
      }
      else {
        setresult('You are obesed')
          document.getElementById('progressbar').style.backgroundColor= 'red'
      }
    }
     
    
    
     
  }
  let Reset=()=>{
    window.location.reload()
  }
  


  return (
    <>
 
    <div className="container mt-5">
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">Height(in Cms)</span>
  <input type="text" value={height} style={{width: '10vw'}} onChange={(e) => setheight(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">Weight(in KGs)</span>
  <input type="text" value={weight} onChange={(e) => setweight(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<div className='sumbitbtn' style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
        <button  type="button" className ="btn btn-info" onClick={calcBMI}>Submit</button>
        <button  type="button" className ="btn btn-danger mx-5" onClick={Reset}>Reset</button>
    </div>
    <div>
        <div class="progress mt-3 mx-5">
  <div id ="progressbar" className="progress-bar" role="progressbar" style={{width: '100%', textAlign:'center',}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Your BMI is {bmi} </div>
</div>
<h3 style={{textAlign:'center', fontFamily: 'fantasy',marginTop: '15px',color: 'white'}}>{result}</h3>
    </div>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item mt-5">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       BMI Categories
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <ul>
        <li>If your BMI is less than 24.9 you are underweight.Eat a balanced diet and do 4/5 times weight training exercises with healthy carbs and protein in diet</li>
        <li>If your BMI is more tha 24.9 you are overweight. Do a 3/4 times regular exercises</li>
       </ul>
      </div>
    </div>
  </div>
  </div>
</div>





</>
  )
}
