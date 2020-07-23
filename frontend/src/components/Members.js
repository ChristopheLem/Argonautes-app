import React, { useEffect, useState } from "react";
import apiAxios from "../config/apiAxios";
import { Member } from './index'

export default function Members() {

  const [members, setMembers] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await apiAxios.get('/');
      setMembers(response.data)
    })()
  })


  return (
    <>
    {
      (members && members.length) 
      ? 
      (
        <>    
          <h2>Membres de l'équipage</h2>
          <section className="member-list">

          {
            members.map(member => {
              return (
                <Member 
                  key={member._id}
                  id={member._id}
                  gaillard={member.name}
            />
              )
            })
          }
          </section>
        </>
      )
      :
        (
          <h2 className="alert">Vite !!! Il faut choisir ton équipage !!!</h2>
        )
      }
      
    </>
  );
}
