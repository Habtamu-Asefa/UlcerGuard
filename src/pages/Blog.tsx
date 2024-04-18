import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Blog({navigation, route}) {
  const { blog } = route.params;

  return (
    <View style={styles.container}> 
      <Image
        source={blog.imageUrl}
        style={styles.blogImage}
      />
      <Text style={styles.blogTitle}>{blog.title}</Text>
      <Text style={styles.blogDescription}>{blog.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  blogImage: {
    
  },
  blogTitle: {
    
  },
  blogDescription: {
   
  },
});

