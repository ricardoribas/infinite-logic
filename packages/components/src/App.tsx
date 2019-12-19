import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Grid from './grid';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red'
        }}
      >
        <Grid
          style={{
            width: 500,
            height: 500
          }}
          rows={6}
          columns={6}
          renderCell={() => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text>5</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
