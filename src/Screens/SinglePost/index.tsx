import React, { Dispatch } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AnyAction } from 'redux';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';

import { Post } from '../../Interfaces/models';
import styles from './styles'

interface State {}
interface Props {
  navigation: NavigationScreenProp<any, any>;
  dispatch: Dispatch<AnyAction>;
  post: Post | undefined;
}
class SinglePostScreen extends React.Component<Props, State> {
  
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }: any) => {
    return {
      headerTitle: 'Post',
      headerRight: (
        <Icon
          // onPress={navigation.getParam('toggleFavoriteInPost')}
          name={'star-border'}
          style={styles.icon}
        />
      ),
    };
  };

  render() {
    const { post } = this.props
    console.log(post)
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            {post && (
              <>
                <Text style={styles.title}>Description</Text>
                <Text style={styles.content}>{post.body}</Text>
                <Text style={styles.title}>User</Text>
                {/* {user && (
                  <>
                    <Text style={styles.body}>{user.name}</Text>
                    <Text style={styles.body}>{user.email}</Text>
                    <Text style={styles.body}>{user.phone}</Text>
                    <Text style={styles.body}>{user.website}</Text>
                  </>
                )} */}
                {/* {loadingUser && <Loader />} */}
                <Text style={styles.title2}>Comments</Text>
                {/* {loadingComments && <Loader />} */}
                <ScrollView>
                  {/* {comments.map((comment, index) => (
                    <View style={styles.cntComment} key={`comment_${index + 1}`}>
                      <Text style={styles.commentText}>{comment.body}</Text>
                      <View style={styles.separator} />
                    </View>
                  ))} */}
                </ScrollView>
              </>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ posts }: any) => ({
  post: posts.post,
});

export default connect(mapStateToProps)(SinglePostScreen);
