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
  postTitle: {
    width: '80%'
  },
  indicatorUnSeen: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.blue,
    marginRight: 12,
  },
  star: {
    color: Colors.yellow,
    fontSize: 20,
    marginRight: 6,
    marginLeft: -6,
  },
  arrow: {
    color: Colors.dividerColor,
    fontSize: 25,
    marginLeft: 12,
  }
});


export default styles
