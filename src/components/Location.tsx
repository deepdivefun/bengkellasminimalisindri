"use client"

import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { FaMapMarkerAlt } from "react-icons/fa";
import googleMapPng from '../../public/google-maps.png'

const containerStyle = {
    width: '660px',
    height: '400px'
  };
  
  const center = {
    lat: -6.261862,
    lng: 106.977896
  };
  
const Location = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBzsgpWGJOKxmxfzrVe-KoPuAAK41d8dSc"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map:any) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map:any) {
        setMap(null)
      }, [])
    
      return isLoaded ? (
        <div className='mx-6 mt-12'>
            <h3 className='mb-6 font-semibold'>Lokasi Pelanayan Kami</h3>
            <div className='grid grid-cols-6 justify-between gap-12'>
                <div className='col-span-3'>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        { /* Child components, such as markers, info windows, etc. */ }
                        <></>
                        </GoogleMap>
                </div>
                <div className='border p-3 col-span-3'>
                    <div className='grid gap-16'>
                        <div className='flex gap-16' >
                          <img src="/google-maps.png" className='w-24 h-24' alt="" />
                            <div>
                              <h1 className='text-2xl font-bold mb-3'>Jakarta</h1>
                              <span>Kami juga melayani daerah jakarta, Kunjungi Kami </span>
                            </div>
                        </div>
                        <div>
                            {/* <FaMapMarkerAlt className='text-2xl' /> */}
                            <h1>Jakarta</h1>
                            <span>Kami juga melayani daerah jakarta</span>
                        </div>
                        <div>
                            {/* <FaMapMarkerAlt className='text-2xl' /> */}
                            <h1>Cibubur</h1>
                            <span>Kami juga melayani daerah jakarta</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      ) : <></>
    }
    

export default Location