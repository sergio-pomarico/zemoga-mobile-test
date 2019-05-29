import React, { Component, ReactFragment } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Post } from '../../../Interfaces/models';
import { Colors } from '../../../Themes'
import Item from './item'

interface State {
  selectedIndex: number;
  scrollEnable: boolean;
}
interface Props {
  posts: Post[];
  handleNavigation: (post: Post) => void;
}

class List extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedIndex: 0,
      scrollEnable: true,
    };
  }

  selectPost = (post: Post) => {
    const { handleNavigation } = this.props
    handleNavigation(post)
  }

  renderItems = (item: Post, index: number): any => {
    return (
      <Item post={item} index={index}  selectPost={(post: Post) => this.selectPost(post)}/>
    )
  }

  _keyExtractor = (item: any, index: number) => `post_${index}`

  render() {
    const { posts } = this.props;
    return (
      <View style={styles.container}>
      { posts.length === 0 && 
        <View style={styles.containerEmptyState}>
          <Icon
            name={'error'}
            style={styles.emptyPostsIcon}
          />
          <Text style={styles.emptyPostsText}>
            No posts to show
          </Text>
        </View>
      }
      {posts.length !== 0 && 
        <FlatList
          keyExtractor={this._keyExtractor}
          data={posts}
          renderItem={({ item, index }) => this.renderItems(item, index)}
          extraData={posts.length}
        />
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerEmptyState: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  emptyPostsIcon: {
    fontSize: 60,
    color: Colors.dividerColor,
    textAlign: 'center',
    marginBottom: 10,
  },
  emptyPostsText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.dividerColor,
  },
  container: {
    flex: 1
  }
});

export default List;
