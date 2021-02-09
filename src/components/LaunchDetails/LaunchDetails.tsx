import React from 'react'
import { LaunchInfoQuery } from '../../generated/graphql'
import "./styles.css"
interface Props {
    data: LaunchInfoQuery
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
let url;
    if (!data.launch) {
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
            <div className={"imagesflex"}>
            {data.launch.links && data.launch.links.flickr_images && data.launch.links.flickr_images?.map((image) => {
           
                return image ? <div><img src={image} /></div> : null
            })}
            </div>
            {data.launch.links && data.launch.links && data.launch.links.video_link && (
                url=data.launch.links.video_link.slice(data.launch.links.video_link.indexOf("v=")).slice(2)
                
            ) && (<iframe className="iframe"
            src={`https://www.youtube.com/embed/${url}`}>
            </iframe>)
            }
        </div>
    )
}
export default LaunchDetails
