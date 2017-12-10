import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { string } from 'prop-types'
import axios from 'axios'

import ImagePost from '../ImagePost'

export default class ImageList extends Component {
  static propTypes = {
    url: string.isRequired,
  }

  state = {
    posts: [],
    width: 0,
  }

  componentDidMount () {
    axios.get(this.props.url)
      .then(res => {
        const data = res.data.data
        const posts = data.children.map(post => {
          const preview = post.data.preview
          const image =  preview && preview.images[0]
          if (image) {
            const gifVariant = image.variants && image.variants.gif
            const source = (gifVariant || image).source
            return { title: post.data.title, source }
          } else {
            return null
          }
        })
        .filter(Boolean)
        this.setState({ posts })
      })
      .catch(err => {
        console.log(err)
      })
  }

  onLayout = (event) => {
    this.setState({
      width: event.nativeEvent.layout.width,
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          onLayout={this.onLayout}
          indicator={true}
          indicatorColor="red"
          indicatorSize="large"
          data={this.state.posts}
          keyExtractor={post => post.source.url}          
          renderItem={({ item }) => (
            <ImagePost width={this.state.width} post={item} />
          )} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingLeft: 7,
    paddingRight: 7,
  },
  post: {
    marginBottom: 40,
  },
  title: {
    padding: 5,
    marginTop: 3,
  },
})
