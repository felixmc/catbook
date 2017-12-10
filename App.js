import React from 'react'
import { StyleSheet, View } from 'react-native'
import ImageList from './components/ImageList'

const subs = [
  'CatsAreAssholes', 'catpranks', 'cats', 'CatGifs', 'kittengifs',
  'babybigcatgifs', 'BigCatGifs',
  'CatSlaps', 'CatTaps', 'KneadyCats', 'Blep', 'StartledCats',
  'CatsStandingUp', 'catreactiongifs', 'holdmycatnip',
  'CatHighFive', 'tuckedinkitties', 'TheCatTrapIsWorking',
  'Purrito', 'CatsInBusinessAttire', 'pimpcats', 'CatsInSinks',
  '',
].join('+')
const redditUrl = `https://www.reddit.com/r/${subs}/.json`

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageList url={redditUrl} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
