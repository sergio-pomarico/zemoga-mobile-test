import React, { Component, Dispatch } from 'react';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
  Animated
} from 'react-native';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Post } from '../../../../Interfaces/models';
import styles from './styles'
import { deletePost } from '../../../../Store/posts/actions'

interface State {
  selectedIndex: number;
  scrollEnabled: boolean;
  buttonWidth: any;
}
interface Props {
  dispatch: Dispatch<AnyAction>;
  post: Post;
  index: number;
  selectPost: (post: Post) => void;
}


const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80
};

class Item extends Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      selectedIndex: 0,
      scrollEnabled: true,
      buttonWidth: new Animated.Value(0)
    };
  }

  onSwipeRight = (gestureState: any) => {
    Animated.timing(this.state.buttonWidth, {
      duration: 1,
      toValue: 60,
    }).start();
  }

  onSwipeLeft = (gestureState: any) => {
    Animated.timing(this.state.buttonWidth, {
      duration: 1,
      toValue: 0,
    }).start();
  }

  tryToDeletePost(post: Post) {
    const { dispatch } = this.props
    Alert.alert('Delete Post', 'Are you sure you want to delete this post?', [
      {
        text: 'No',
        onPress: () => {
          Animated.timing(this.state.buttonWidth, {
            duration: 1,
            toValue: 0,
          }).start();
        },
      },
      {
        text: 'Yes',
        onPress: () => {
          dispatch(deletePost(post));
          Animated.timing(this.state.buttonWidth, {
            duration: 1,
            toValue: 0,
          }).start();
        },
      },
    ]);
  }

  render() {
    const { post, selectPost } = this.props
    return (
      <GestureRecognizer
        onSwipeRight={(state:any) => this.onSwipeRight(state)}
        onSwipeLeft={(state:any) => this.onSwipeLeft(state)}
        config={config}
        style={{
          flex: 1,
          flexDirection: 'row'
        }}
      >  
        <Animated.View style={{ width: this.state.buttonWidth, justifyContent: 'center', alignItems: 'center' }}>       
          <Icon 
            name={'delete'} 
            style={styles.trash}
            onPress={()=> this.tryToDeletePost(post)}
          />
        </Animated.View>    
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
      </GestureRecognizer>
    );
  }
}

export default connect()(Item);
