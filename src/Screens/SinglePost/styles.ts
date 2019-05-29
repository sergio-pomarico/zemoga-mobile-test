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
    fontWeight: '600',
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
    fontWeight: '600',
  },
  content: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.primaryTextColor,
    paddingHorizontal: Metrics.marginHorizontal,
  },
  commentContainer: {
    marginHorizontal: Metrics.marginHorizontal,
  },
  commentText: {
    paddingVertical: 20,
    color: Colors.primaryTextColor,
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.dividerColor,
    width: '100%',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles
