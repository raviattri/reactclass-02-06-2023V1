import { useState , React} from 'react';

function Demo() {
  var jsondata = {
    "name":"vivek",
    "age":"25",
    "class":"9th"
  }
    const [answer, setAnswer] = useState("");
    const [namedata , setNamedata] = useState("");
    function fun1(){
      setNamedata(jsondata);
    }
    function fun2(){
        setAnswer("Amit");
    }
      return (
        <>
          <p>Name {namedata.name}</p>
          <p>age {namedata.age}</p>
          <p>class {namedata.class}</p>
  
          <button onClick={fun1}>
              Submit
            </button>
            <button onClick={fun2}>
              Submit2
            </button>
        </>
      );
    }
    
export default Demo;


