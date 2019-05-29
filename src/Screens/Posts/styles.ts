import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Metrics } from '../../Themes/';

const { width } = Dimensions.get('window')

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
  },
  fabButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.red,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primaryTextColor,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  deleteIcon: {
    color: Colors.primaryColorText,
    fontSize: 30,
  },
  deleteButton: {
    backgroundColor: Colors.red,
    paddingVertical: 12,
    width: width
  },
  deleteButtonText: {
    color: Colors.primaryColorText,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles