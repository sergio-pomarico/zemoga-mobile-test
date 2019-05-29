import React, { Component, ReactFragment } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
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
      <>
      { posts.length === 0 && 
        <View style={styles.loading}>
          <ActivityIndicator color={Colors.accentColor} size="large"/>
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
      </>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default List;
