import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#FFF" />
    </View>
  );
};

export default Loader;
