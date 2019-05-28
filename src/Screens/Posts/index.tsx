import React, { Component, Dispatch } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';

import { Post } from '../../Interfaces/models';
import { getPosts } from '../../Store/posts/actions';

import List from './components/list'

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

  componentDidMount() {
    this.getPostData();
  }

  getPostData = () => {
    const { dispatch } = this.props;
    dispatch(getPosts())
  }

  render() {
    const { posts } = this.props;
    return (
      <View style={styles.container}>
        <List posts={posts}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const mapStateToProps = ({ posts }: any) => ({
  posts: posts.posts,
});

export default connect(mapStateToProps)(PostsScreen);