import React from 'react';
import {View, SafeAreaView} from 'react-native';
import HomeScreen from '@ifsg/common/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
};

export default App;
