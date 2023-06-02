import { useState , React} from 'react';

function FormState() {

    const [answer, setAnswer] = useState("");
    const [email, setAEmail] = useState("");
    function textChnage(e){
        setAnswer(e.target.value);
    }

    function handlexSubmit (e){
     e.preventDefault();   
     console.log(answer);
     if (answer == "New Zealand"){
        alert("Yes correct answer")
     } else if (answer == "New"){
        alert("half answer")
     } else{
        alert("wrong answer")

     }
 }

    return (
        <>
          <p>City Quiz {answer} </p>
          <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handlexSubmit}>
       <textarea 
       onChange={textChnage}
       />
       <br/>
       <button>
        Submit
       </button>

      </form>
          
        </>
      );
    }
    
export default FormState;


