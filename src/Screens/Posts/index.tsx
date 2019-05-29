import React, { Component, Dispatch } from 'react';
import { View, Platform, TouchableOpacity, Text } from 'react-native';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Post } from '../../Interfaces/models';
import { getPosts, selectPost, deleteAllPosts } from '../../Store/posts/actions';
import { getUser } from '../../Store/users/actions'
import { getComments } from '../../Store/comments/actions'

import List from './components/list'
import styles from './styles'

interface State {
  selectedIndex: number;
  favoritePosts: Post[] | undefined;
}
interface Props {
  posts: any[];
  navigation: any;
  dispatch: Dispatch<AnyAction>;
}

const isIOS= Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

class PostsScreen extends Component<Props, State>  {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedIndex: 0,
      favoritePosts: []
    };
    this.props.navigation.setParams({
      refreshFeed: this.refreshFeed,
    });
  }

  static navigationOptions = ({ navigation }: any) => {
    return {
      headerTitle: 'Posts',
      headerRight: (
        <Icon
          name={'refresh'}
          style={styles.icon}
          onPress={navigation.getParam('refreshFeed')}
        />
      ),
    };
  };

  componentDidMount() {
    this.getPostData();
  }

  getPostData = () => {
    const { dispatch } = this.props;
    dispatch(getPosts())
  }

  refreshFeed = () => {
    const { dispatch } = this.props;
    dispatch(getPosts());
  };

  deleteAllPosts() {
    const { dispatch } = this.props;
    dispatch(deleteAllPosts());
  }


  handleNavigation = (post: Post) => {
    const { navigation, dispatch } = this.props
    dispatch(selectPost(post))
    dispatch(getUser(post.userId));
    dispatch(getComments(post.id))
    navigation.navigate('Post');
  }

  render() {
    const { posts } = this.props;
    const havePost = posts.length > 0
    return (
      <View style={styles.container}>
        <List posts={posts} handleNavigation={this.handleNavigation}/>
        {havePost && isAndroid && (
          <TouchableOpacity
            style={styles.fabButton}
            onPress={() => this.deleteAllPosts()}
          >
            <Icon name={'delete'} style={styles.deleteIcon} />
          </TouchableOpacity>
        )}
        {havePost && isIOS && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => this.deleteAllPosts()}
          >
            <Text style={styles.deleteButtonText}>Delete All</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}


const mapStateToProps = ({ posts }: any) => ({
  posts: posts.posts,
});

export default connect(mapStateToProps)(PostsScreen);