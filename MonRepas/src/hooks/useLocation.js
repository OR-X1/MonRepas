import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { geohashForLocation } from "geofire-common";

export const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        const error = { error: 'Permission to access location was denied' };
        setLocation(error);
        return;
      }
      const { coords } = await Location.getCurrentPositionAsync({});
      const hash = geohashForLocation([coords.latitude, coords.longitude]);
      const location = { ...coords, hash, error: null };
      setLocation(location);
    })();
  }, []);
  return location;
}


const TRACKING_APP = 'TRACKING_APP';
export const useTracking = () => {
  useEffect(() => {
    (async () => {
      await Location.startLocationUpdatesAsync(TRACKING_APP, {
        timeInterval: 5000,
      });

    })();
    return () => Location.stopLocationUpdatesAsync(TRACKING_APP);
  }, []);
}