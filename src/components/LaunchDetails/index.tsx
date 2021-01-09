
import React  from 'react'
import {useLaunchInfoLazyQuery, useLaunchInfoQuery} from '../../generated/graphql'
import LaunchDetails from './LaunchDetails'

interface Props {
    id:string
}
const LaunchDetailsContainer:React.FC<Props>=({id})=>{
    const {data,error,loading} =useLaunchInfoQuery({
        variables:{
            id:id
        }
    })
    if(loading) {
        return <div>Loading...</div>
    }
    if(error) {
        return <div>Details Errorr...</div>
    }
    if(!data) {
        return <div>Please select a mission</div>
    }
    return (
        <LaunchDetails data={data} />
    )
}
export default LaunchDetailsContainer