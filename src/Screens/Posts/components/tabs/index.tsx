import React from 'react';
import {
  View,
  SegmentedControlIOS,
  StyleSheet
} from 'react-native';
import MaterialTabs from 'react-native-material-tabs';

import { Colors } from '../../../../Themes'

interface Props {
  platform: string;
  index: number;
  onCangeTab: (index: any) => void;
}

const Tabs = (props: Props) => {
    const { onCangeTab, platform, index } = props
    return (
      <View style={styles.container}>
      { platform ==='ios' && (
        <SegmentedControlIOS
          style={styles.segmentControl}
          tintColor={Colors.primaryColor}
          values={['All', 'Favorites']}
          selectedIndex={index}
          onChange={({ nativeEvent }) => onCangeTab(nativeEvent.selectedSegmentIndex)}
        />
      )}
      { platform === 'android' && (
        <MaterialTabs
          items={['All', 'Favorites']}
          selectedIndex={index}
          onChange={(index) => onCangeTab(index)}
          barColor={Colors.primaryColor}
        />
      )}
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  segmentControl: {
    marginVertical: 8,
    marginHorizontal: 30,
  },
});

export default Tabs;
