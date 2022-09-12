import React from "react"
// import ReactDOM from "react-dom/client";
import moment from "moment";

const DayNames = {
    1: 'Mon',
    3: 'Wed',
    5: 'Fri'
};

function Cell({startDate , index}){
    // let date = moment(startDate).add(index , 'day');
    return(
        <div className='timeline-cells-cell'></div>
    )
}

function Month({startDate , index}){
    let date = moment(startDate).add(index*7 , 'day');
    let monthName = date.format('MMM');
    // console.log(monthName);
    return(
        <div className={`timeline-months-month ${monthName}`}>

            {monthName}
        </div>
    )
}
function Week({ index}){
    return (
        <div className='timeline-weeks-week'>{DayNames[index]}</div>
    )

}


function Timeline({range , data}){
    let days = Math.abs(range[0].diff(range[1],'days'));
    // let dateRange = [moment().add(-365, 'days').toDate(),moment().toDate()];
    let cells = Array.from(new Array(days));
    let weekdays = Array.from(new Array(7));
    let months = Array.from(new Array(Math.floor(days/7)));

    // let min = Math.min(...data.map(d => d.value));
    // let max = Math.max(...data.map(d => d.value));
    // console.log(min,max);

    return(

     <div className='timeline'>

     <div className='timeline-months'>
         {months.map((_,index) => <Month key={index} index={index} startDate={range[0]}/>)}
     </div>

      <div className='timeline-body'>

          <div className='timeline-weekdays'>
              {weekdays.map((_,index) => <Week key = {index} index={index} startDate={range[0]}/>)}
          </div>

    <div className='timeline-cells'>
        {cells.map((_,index) => <Cell key = {index} index = {index} startDate={range[0]}/>)}
    </div>

     </div>

     </div>
    );
}

export default Timeline;

