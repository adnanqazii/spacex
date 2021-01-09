import React from 'react'
import {LaunchInfoQuery} from '../../generated/graphql'

interface Props {
    data:LaunchInfoQuery
}

const LaunchDetails:React.FC<Props>=({data})=>{
    if(!data.launch) {
        return <div>Launch unavaiable</div>
    }
    return (
        <div className="LaunchDetails">
            <div className="LaunchDetailsStatus">
                <span>Flight {data.launch.flight_number}:  </span>
            </div>
            <h1>
                {data.launch.mission_name}-{data.launch.rocket?.rocket_name}
            </h1>
            <p>Launched from {data.launch.launch_site?.site_name}</p>
            <p>{data.launch.details}</p>
            {data.launch.links &&  data.launch.links.flickr_images && data.launch.links.flickr_images?.map((image)=>{
               return image ? <img src={image} />:null
            })}
        </div>
    )
}
export default LaunchDetails
