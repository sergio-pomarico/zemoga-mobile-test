import React, { Component, ReactFragment } from 'react';
import { View, FlatList } from 'react-native';

import { Post } from '../../../Interfaces/models';
import Item from './item'

interface State {
  selectedIndex: number;
  scrollEnable: boolean;
}
interface Props {
  posts: Post[];
}

class List extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedIndex: 0,
      scrollEnable: true,
    };
  }

  renderItems = (item: Post, index: number): any => {
    return (
      <Item post={item} index={index}/>
    )
  }

  _keyExtractor = (item: any, index: number) => `post_${index}`

  render() {
    const { posts } = this.props;
    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={posts}
        renderItem={({ item, index }) => this.renderItems(item, index)}
        extraData={posts.length}
      />
    );
  }
}

export default List;
