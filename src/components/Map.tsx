"use client"

import React, {useEffect}  from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export function Map() {

    const mapRef = React.useRef(null)

    useEffect(() => {

        const initMap = async () => {

            const loader = new Loader ({   
            apiKey : process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
            version: 'weekly',
            })

            const { Map } = await loader.importLibrary('maps')

            const { Marker } = await loader.importLibrary('marker') as google.maps.marker.AdvancedMarkerElement;

            const position = {
                //-6.261894415835695, 106.97785376550225
                lat :-6.261894,
                lng:106.977853
            }

            const mapOptions:  google.maps.MapOptions = {
                center:position,
                zoom:15,
                mapId:"NEXTJS_MAPID"
            }

            const map = new Map (mapRef.current as HTMLDivElement, mapOptions);
            
            // const marker = new Marker({
            //     map:map,
            //     position:position
            // })
        }


        initMap()

    })

    return (
        <div className='h-96' ref={mapRef} ></div>
    )
}