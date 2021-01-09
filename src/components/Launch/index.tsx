import React, { useEffect } from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import Launch from './Launch'
import LaunchType from '../../types/Launch'
interface Props {
    setLaunch: (initialState: LaunchType[] | (() => LaunchType[])) => void
    detailHandler:(event:any,id:string)=>void
}
const LaunchContainer: React.FC<Props> = ({ setLaunch,detailHandler }) => {
    const { data, error, loading } = useLaunchesQuery()
    useEffect(() => {
        const arr: LaunchType[] = [];
        data && data.launches && data.launches?.forEach((launch, i) => {
            launch?.flight_number && arr.push({
                id: `${launch?.flight_number}`
            })
        })
        setLaunch(arr)
    }, [data])
    if (loading) {
        return <div>Loading...</div>
    }
    if (error || !data) {
        return <div>Error...</div>
    }

    return <Launch detailHandler={detailHandler} data={data} />
}
export default LaunchContainer