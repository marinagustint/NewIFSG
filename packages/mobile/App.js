import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
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

const styles = StyleSheet.create({});
