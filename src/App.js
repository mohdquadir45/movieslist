
import './App.css';

import {useState, useEffect} from 'react'

import TextField from "@mui/material/TextField";
import List from './List';


function App() {

  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.tvmaze.com/schedule?country=US&date=2021-12-08")
    .then((res) => res.json())
    .then((data) => {
      setList(data)
      setFilteredList(data)
    })
  }, [])

  const handleChange = (event) => {
      event.preventDefault()
      setSearch(event.target.value)
      /* const listCopy = JSON.parse(JSON.stringify(list)) */
      setFilteredList(list.filter((item) => {
        const {name}=item.show;
        return name.toLowerCase().includes(search.toLocaleLowerCase() )
      }));
  }
  return (
    <span className="App">
      <TextField fullWidth
      label="Search for TV show"
      id="fullWidth"
      value={search}
      onChange={handleChange}
      />
      <hr/>
      <br/>
      <List list={filteredList}/>
    </span>
  );
}

export default App;
