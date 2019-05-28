import React, { Component, Dispatch } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';

import { Post } from '../../../Interfaces/models';

interface State {
  selectedIndex: number;
  scrollEnabled: boolean;
  position: any;
}
interface Props {
  dispatch: Dispatch<AnyAction>;
  post: Post;
  index: number;
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
    const { post } = this.props
    return (
      <View>
        <View>
          <Text>
            {post.title}
          </Text>
        </View>
      </View>
    );
  }
}

export default connect()(Item);
