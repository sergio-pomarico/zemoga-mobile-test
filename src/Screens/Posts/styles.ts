import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Metrics.marginHorizontal
  },
  icon: {
    color: Colors.primaryColorText,
    marginRight: 15,
    fontSize: 25,
  }
});

export default styles