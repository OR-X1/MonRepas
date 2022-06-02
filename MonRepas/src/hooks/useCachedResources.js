import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { useEffect, useState } from 'react'

export function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false)
    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync()
                await Font.loadAsync({
                    'Poppins-Black': require('../../assets/fonts/Poppins-Black.ttf'),
                    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
                    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
                    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
                })

            } catch (e) {
                console.warn(e)
            } finally {
                setLoadingComplete(true)
                SplashScreen.hideAsync()
            }
        }
        loadResourcesAndDataAsync()
    }, [])

    return isLoadingComplete
}
