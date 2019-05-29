import React, { Dispatch } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AnyAction } from 'redux';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';

import { Post, User, Comment } from '../../Interfaces/models';
import styles from './styles'
import { Colors } from '../../Themes';

interface State {}
interface Props {
  navigation: NavigationScreenProp<any, any>;
  dispatch: Dispatch<AnyAction>;
  post: Post | undefined;
  user: User;
  comments: Comment[];
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
    const { post, user, comments } = this.props
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            {! post && 
              <View style={styles.loading}>
                <ActivityIndicator color={Colors.accentColor} size="large"/>
              </View>
            }
            {post && (
              <>
                <Text style={styles.title}>Description</Text>
                <Text style={styles.content}>{post.body}</Text>
                {user && (
                  <>
                    <Text style={styles.title}>User</Text>
                    <Text style={styles.content}>{user.name}</Text>
                    <Text style={styles.content}>{user.email}</Text>
                    <Text style={styles.content}>{user.phone}</Text>
                    <Text style={styles.content}>{user.website}</Text>
                  </>
                )}
                <View>
                  <Text style={styles.title2}>Comments</Text>
                  {comments.map((comment, index) => (
                    <View style={styles.commentContainer} key={`comment_${index + 1}`}>
                      <Text style={styles.commentText}>{comment.body}</Text>
                      <View style={styles.separator} />
                    </View>
                  ))}
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ posts, user, comments }: any) => ({
  post: posts.post,
  user :user.user,
  comments: comments.comments
});

export default connect(mapStateToProps)(SinglePostScreen);
