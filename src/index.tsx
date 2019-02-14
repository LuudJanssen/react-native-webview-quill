import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Hello extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello from the other side!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
