import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './Main';
import { StatusBar, StyleSheet, View } from 'react-native';

const App = () => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <StatusBar style="light" />
                <Main />
            </View>
        </SafeAreaProvider>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 3,
        paddingTop: 10
    },
});
export default App;
