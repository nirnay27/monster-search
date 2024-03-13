import "./index.css"

export const Card = (props) => {

  const {monsterdata}=props;
 
  const{userid,username,email}=monsterdata;
 
    const url="https://robohash.org/"+userid+"?set=set2&size=180x180";
    return(
<div className="card-container">
    <img src={url} alt="monster-image"/>
    <h2> {username}</h2>
    <h3>{email}</h3>
   
</div>

)}