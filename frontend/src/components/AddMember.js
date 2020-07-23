import React, { useState, useRef } from "react";
import apiAxios from '../config/apiAxios'

export default function AddMember() {

  const [isAdded, setIsAdded] = useState(false)
  const ref = useRef()

  let member;
  
  const message = <h2 className='confirmation'>Le membre a été ajouté à votre équipage !</h2>;

  const handleChange = async e => {
    member = {
      name: e.target.value
    };
  };

  const handleClick = async e => {
    e.preventDefault();
    await apiAxios.post("/", member);
    ref.current.value = '';
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
    
  };

  return (
    <div>
      <h2>Ajouter un(e) Argonaute</h2>
      <form className="new-member-form">
        <label htmlFor="name">Nom de l&apos;Argonaute</label>
        <input ref={ref} id="name" name="name" type="text" placeholder="Charalampos" onChange={handleChange} />
        <button type="submit" onClick={handleClick}>
          Envoyer
        </button>
      </form>
      {
        isAdded 
        ? 
        (
          message
        ) 
        : 
        null
      }
    </div>
  );
}
