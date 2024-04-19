import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import blogsData from '../Data/data';
import {CONST} from '../CONST';

export default function Blogs({navigation}) {
  const handleBlogItemClick = blog => {
    navigation.navigate(CONST.SCREEN.BLOG, {blog});
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Text style={styles.header}>Blogs</Text>
      <ScrollView>
        {blogsData.map(blog => (
          <TouchableOpacity
            key={blog.id}
            style={styles.blogItem}
            onPress={() => handleBlogItemClick(blog)}>
            <Image source={blog.imageUrl} style={styles.blogImage} />
            <View style={styles.blogTextContainer}>
              <Text style={styles.blogTitle}>{blog.title}</Text>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={styles.blogDetail}>
                {blog.content}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 10,
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 15,
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'space-around',
  },
  blogItem: {
    flexDirection: 'row',
    paddingBottom: 10,
    elevation: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  blogImage: {
    width: 95,
    height: 95,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    marginRight: 5,
  },
  blogTextContainer: {
    flex: 1,
    backgroundColor: '#CEEAF7',
    paddingVertical: 10,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    paddingLeft: 7,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  blogDetail: {
    fontSize: 12,
    paddingTop: 6,
    color: 'black',
    paddingRight: 10,
  },
});
