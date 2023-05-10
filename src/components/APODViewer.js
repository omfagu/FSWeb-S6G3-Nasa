import React from 'react';

const APODViewer = (props) => {

    const {apod,dateChange,currentDate} = props;

    return <div>
         <div className="tarih">
                <input type="date"
                value={currentDate}
                onChange={(e)=>dateChange(e.target.value)}/>
            </div>  
       <p>{apod.date}</p> 
       <img src={apod.hdurl} alt={apod.explanation}/>
       <p>
       {apod.media_type}
        {apod.service_version}
       </p>
   
        <div>
            {apod.title}
            
            <img src={apod.url} alt={apod.explanation}/>
        </div>
    </div>


};

export default APODViewer;