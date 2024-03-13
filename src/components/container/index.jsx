import { useEffect, useState } from "react";
import { signupUser } from "../../redux/redux/action/signup.action";
import "./index.css";
import SearchInput from "../search-input";
import { CardList } from "../card-list";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../redux/redux/action/search.action";
import { showModal } from "../../redux/redux/action/showmodal.action";

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchuser();
  }, [dispatch]);

  const fetchuser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const resjson = await res.json();

    //  console.log(resjson);
    dispatch(signupUser(resjson));
  };
  const handleChange = (event) => {
    const { value } = event.target;

    dispatch(searchUser(value));
    // console.log(event);
  };
  const monsters = useSelector((state) => state.user.monsters);
  console.log(monsters);
  const searchField = useSelector((state) => state.user.searchfield);
  console.log(searchField);

  const filterMonsters = monsters.filter((monster) =>
    monster.username.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <div className="App">
      <h1>Monster App</h1>
      {/* <SearchInput handleChange={this.handleChange} /> */}
      <SearchInput handleChange={handleChange} />
      <CardList monster={filterMonsters} />
    </div>
  );
};

export default Home;
