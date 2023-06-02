import React, {useState} from 'react'

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        ""
      )}

      <button onClick={() => setIsActive(!isActive)}>
      {isActive ? "Less" : "More" }
          
        </button>
    </section>
  );
}



export default function ProsClass(props) {
  return (
    <div>


    <p>First Name : {props.data.userName}</p>
       
    <Panel>
  <p>  {props.data.age}</p>
  <p>  {props.data.class}</p>
  <p>  {props.data.address}</p>
  <p>  {props.data.RollNo}</p>
  <p>  {props.data.PhonNumber}</p>
    </Panel>

    </div>
  )
}



