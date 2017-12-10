import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { shape, string, number, bool } from 'prop-types'
// import { CachedImage } from 'react-native-img-cache'

export default class ImagePost extends Component {
  static propTypes = {
    post: shape({
      title: string,
      source: shape({
        uri: string,
        width: number,
        height: number,
      }).isRequired,
    }),
    width: number,
    cache: bool,
  }

  render () {
    const { post, width } = this.props
    const { source, title } = post
    return (
      <View style={styles.container}>
        <Image
          source={source}
          style={{
            width,
            height: width * (source.height / source.width),
          }} />
        <Text style={styles.title}>{title}</Text>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  title: {
    padding: 3,
    marginTop: 3,
  },
})