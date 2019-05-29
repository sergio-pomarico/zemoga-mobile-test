import React, { Component, Dispatch } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Post } from '../../Interfaces/models';
import { getPosts, selectPost } from '../../Store/posts/actions';
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

class PostsScreen extends Component<Props>  {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }: any) => {
    return {
      headerTitle: 'Posts',
      headerRight: (
        <Icon
          name={'refresh'}
          style={styles.icon}
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

  handleNavigation = (post: Post) => {
    const { navigation, dispatch } = this.props
    dispatch(selectPost(post))
    dispatch(getUser(post.userId));
    dispatch(getComments(post.id))
    navigation.navigate('Post');
  }

  render() {
    const { posts } = this.props;
    return (
      <View style={styles.container}>
        <List posts={posts} handleNavigation={this.handleNavigation}/>
      </View>
    );
  }
}


const mapStateToProps = ({ posts }: any) => ({
  posts: posts.posts,
});

export default connect(mapStateToProps)(PostsScreen);