import React from "react";
import './Skilled.css';
import SkilledItem from "./SkilledItem";

function Skilled() {
  const skilleds = [
    {
      title:'HTML',
      now:95,
    },
    {
      title:'CSS',
      now:90,
    },
    {
      title:'BOOSTRAP',
      now:90,
    },
    {
      title:'JAVASCRIPT',
      now:80,
    },
    {
      title:'REACT JS',
      now:80,
    },
    {
      title:'NODE JS',
      now:70,
    },
    {
      title:'PYTHON',
      now:75,
    },
    {
      title:'JAVA',
      now:75,
    },
    {
      title:'SQL',
      now:60,
    },
    {
      title:'MOGODB',
      now:65,
    },
  ]
  return (
    <section id='skilled' className="content" style={{background:'#3333'}}>
      <div className="heading-text">
          <h2 >Skilled</h2>
      </div>
      <div className='skilled-content'>
        {
          skilleds.map(skilled => <SkilledItem key={skilled.title} {...skilled}></SkilledItem>)
        }
      </div>
    </section>
  );
}

export default Skilled;
