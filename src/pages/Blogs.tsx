import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import blogsData from '../Data/data';
import { CONST } from '../CONST';

export default function Blogs({ navigation }) {
  const handleBlogItemClick = (blog) => {
    navigation.navigate(CONST.SCREEN.BLOG, { blog });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Health <Text style={{ color: 'green'}}>Blogs</Text>
      </Text>
      <ScrollView>
        {blogsData.map(blog => (
          <TouchableOpacity
            key={blog.id}
            style={styles.blogItem}
            onPress={() => handleBlogItemClick(blog)}
          >
            <Image
              source={blog.imageUrl}
              style={styles.blogImage}
            />
            <View style={styles.blogTextContainer}>
              <Text style={styles.blogTitle}>{blog.title}</Text>
              <Text numberOfLines={3} ellipsizeMode="tail" style={styles.blogDetail}>{blog.content}</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: 30,
    flex: 1,
    justifyContent: 'space-around',
  },
  blogItem: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  blogImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  blogTextContainer: {
    flex: 1,
    backgroundColor: '#F2FFF7',
    paddingVertical: 7,
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
  }
});
