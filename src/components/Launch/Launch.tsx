import React from 'react'
import {LaunchesQuery} from '../../generated/graphql'
import './style.css'
import LaunchType from '../../types/Launch'
interface Props {
    data:LaunchesQuery,
    detailHandler:(event:any,id:string)=>void
}

 const Launch: React.FC<Props>=({data,detailHandler})=>{
   
    return(
    <div className="Launches">
        <h1 className="heading">All Spacex Launches</h1>
        <ol className="Launchesol">
        {data.launches &&
         data.launches.map((launch,i)=>
         launch && 
         (<li onClick={(event:any)=>detailHandler(launch.flight_number,event)} key={i} className="launchitem">
             {launch.mission_name}-{launch.launch_year} ({launch.launch_success?"Not":null} Successful)
         </li>)
         )
         }
        </ol>
    </div>
    )
}

export default Launch