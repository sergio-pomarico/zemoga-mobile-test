import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
  icon: {
    color: Colors.primaryColorText,
    marginRight: 15,
    fontSize: 25,
  },
  title: {
    fontSize: Metrics.fontSize,
    color: Colors.primaryTextColor,
    fontWeight: Metrics.fontWeightBold,
    marginBottom: 8,
    marginTop: 20,
    paddingHorizontal: Metrics.marginHorizontal,
  },
  title2: {
    backgroundColor: Colors.dividerColor,
    color: Colors.primaryTextColor,
    textTransform: 'uppercase',
    paddingHorizontal: Metrics.marginHorizontal,
    paddingVertical: 4,
    marginTop: 20,
    marginBottom: 8,
    fontWeight: Metrics.fontWeightBold,
  },
  content: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.primaryTextColor,
    paddingHorizontal: Metrics.marginHorizontal,
  }
});

export default styles
