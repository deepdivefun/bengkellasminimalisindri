'use client'

import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Bengkel Las Jakarta",
    description: 'Bengkel Las Jakarta Melayani pembuatan dan servis pagar, kanopi, pintu minimalis, jendela minimalis, railing dor',
    
  };

interface MapProps {
  lat: number;
  lng: number;
  className?: string;
}

export function Map({ lat, lng, className }: MapProps) {
  const mapRef = React.useRef(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');

      const position = {
        lat,
        lng,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        mapId: "NEXTJS_MAPID",
      };

      const mapInstance = new Map(mapRef.current as any, mapOptions);
      setMap(mapInstance);
    };

    initMap();
  }, [lat, lng]);

  useEffect(() => {
    if (map) {
      const position = { lat, lng };
      map.setCenter(position);
    }
  }, [lat, lng, map]);

  return (
    <div className={className} ref={mapRef}></div>
  );
}
