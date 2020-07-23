import React, { useEffect, useState } from "react";
import apiAxios from "../config/apiAxios";

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
      <h2>Membres de l'équipage</h2>
      <section className="member-list">
      </section>
    </>
  );
}
