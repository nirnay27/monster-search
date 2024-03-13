import "./index.css";
import { Card } from "../card";

import { useEffect, useState } from "react";

export const CardList = ({ monster }) => {
  //  const [monster,setMonster] = useState([]);

  //   useEffect(()=>{
  //      fetchApi();
  //   },[]);

  //   const fetchApi = async () =>{
  //   const apidata=  await fetch("https://jsonplaceholder.typicode.com/users");
  //   const result = await apidata.json();
  //   setMonster(result);

  // console.log(result)
  // }

  return (
    <div className="card-list">
      {monster.map((monst) => (
        <Card key={monst?.userid} monsterdata={monst} />
      ))}
    </div>
  );
};
