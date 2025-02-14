import "../index.css";
import React from 'react';

const APODViewer = (props) => {

    const {apod,dateChange,currentDate} = props;

    return <div>
         <div className="tarih">
            <div className="header">
                <h2>SELECT DATE </h2>
                <input type="date"
                value={currentDate}              
                onChange={(e)=>dateChange(e.target.value)}/> 
            </div>
            <div>     
            <h2>{apod.date}</h2> 
            <h3>{apod.title}</h3>               
            <p>{apod.explanation}</p>       
            <img src={apod.hdurl} alt={apod.explanation}/>
            </div>       
        </div>    
    </div>


};

export default APODViewer;