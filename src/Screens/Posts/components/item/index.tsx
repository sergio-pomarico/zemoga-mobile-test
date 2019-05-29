import React, { Component, Dispatch } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Platform
} from 'react-native';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Post } from '../../../../Interfaces/models';
import styles from './styles'

interface State {
  selectedIndex: number;
  scrollEnabled: boolean;
  position: any;
}
interface Props {
  dispatch: Dispatch<AnyAction>;
  post: Post;
  index: number;
  selectPost: (post: Post) => void;
}


const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

class Item extends Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      position: null,
      selectedIndex: 0,
      scrollEnabled: true,
    };
  }

  render() {
    const { post, selectPost } = this.props
    return (
      <TouchableOpacity style={styles.item} onPress={() => selectPost(post)}>
        {!post.seen && <View style={styles.indicatorUnSeen} />}
        {post.seen && post.favorite && isIOS && (
          <Icon name={'star'} style={styles.star} />
        )}
        <Text style={styles.postTitle}>{post.title}</Text>
        {post.favorite && isAndroid && (
          <Icon name={'star'} style={styles.star} />
        )}
        {isIOS && <Icon name={'chevron-right'} style={styles.arrow} />}
      </TouchableOpacity>
    );
  }
}

export default connect()(Item);
