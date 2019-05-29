import React, { Component, Dispatch } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';

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
        <View>
          <Text>
            {post.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default connect()(Item);
