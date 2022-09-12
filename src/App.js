// import logo from './logo.svg';
import './App.css';
// import Navbar from "./Components/Navbar";
// import TextForm from "./Components/TextForm";
// import About from "./Components/About";
// import FavoriteColor from "./Components/FavColor";
// import Counter from "./Components/demo";
// import Home from "./Components/Home";
// import Todos from "./Components/Todos";
import Timeline from "./Components/Calendar";
import moment from "moment/moment";

function App() {

    let startDate = moment().add(-365, 'days');

    // let days = 365;
    let dateRange = [moment().add(-365, 'days'), moment()];

    let data = Array.from(new Array(365)).map((_,index) =>{
        return{
          date: moment(startDate).add(1,'day'),
          value: Math.floor(Math.random() * 100),
        };
    })
    // console.log(data[0].date.toDate().toString());
    return (
      <>
          {/*<div className="App">*/}
    <Timeline range={dateRange}/>
    {/*      <Todos/>*/}
    {/*          <App/>*/}
          {/*</div>*/}
          {/*<Navbar/>*/}
          {/*<Home/>*/}
          {/*    title= "GURUKULA" about = "About us"/>*/}
          {/*<div className='container my-5'>*/}
          {/*<TextForm heading = "Enter the text to analyze"/>*/}
          {/*/!*    <About/>*!/*/}
          {/*</div>*/}
          {/*<FavoriteColor/>*/}
          {/*<Counter/>*/}
       </>
       )
}

export default App;
