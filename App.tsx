import React, {useEffect, useState} from 'react';
import SplashScreen from './src/screens/SplashScreen';
import {AuthProvider} from './src/providers/Auth';
import AppNav from './src/navigation/AppNav';
import 'react-native-reanimated';

function App(): React.JSX.Element {
    const [isShowSplashScreen, setShowSplashScreen] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSplashScreen(false);
        }, 5000);
    }, []);

    return (
        <AuthProvider>
            {isShowSplashScreen ? <SplashScreen /> : <AppNav />}
        </AuthProvider>
    );
}

export default App;
