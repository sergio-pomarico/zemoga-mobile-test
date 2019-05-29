import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../Themes';

const styles = StyleSheet.create({
  item: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: Metrics.fontSize,
    minHeight: 60,
    borderBottomWidth: 1,
    borderColor: Colors.dividerColor,
  },
});

export default styles
