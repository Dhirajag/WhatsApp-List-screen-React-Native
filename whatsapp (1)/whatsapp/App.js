import {
  Text,
  StyleSheet,
  PreviewLayout,
  View,
  Image,
  ScrollView,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.text}>{'WhatsApp'}</Text>
        <View style={styles.container}>
          <View style={[styles.box, { backgroundColor: 'green' }]}></View>
          <View style={[styles.box, { backgroundColor: 'powderblue' }]}></View>
          <View style={[styles.box, { backgroundColor: 'blue' }]}></View>
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView>
          <View style={[styles.chats, { backgroundColor: 'green' }]}>
            <Image
              source={require('./IMG_20231012_202545_535.jpg')}
              style={styles.image}
            />
            <View>
              <Text style={styles.text2}>Bikash Kumar Agrawal</Text>
              <Text style={styles.text3}>Bikash Kumar Agrawal</Text>
            </View>
            <View>
              <Text style={styles.text4}>01.18 pm</Text>
            </View>
          </View>
          <View style={[styles.chats, { backgroundColor: 'green' }]}>
            <Image
              source={require('./IMG_20231012_202545_535.jpg')}
              style={styles.image}
            />
            <View>
              <Text style={styles.text2}>Bikash Kumar Agrawal</Text>
              <Text style={styles.text3}>Bikash Kumar Agrawal</Text>
            </View>
            <View>
              <Text style={styles.text4}>01.18 pm</Text>
            </View>
          </View>
          <View style={[styles.chats, { backgroundColor: 'green' }]}>
            <Image
              source={require('./IMG_20231012_202545_535.jpg')}
              style={styles.image}
            />
            <View>
              <Text style={styles.text2}>Bikash Kumar Agrawal</Text>
              <Text style={styles.text3}>Bikash Kumar Agrawal</Text>
            </View>
            <View>
              <Text style={styles.text4}>01.18 pm</Text>
            </View>
          </View>
          <View style={[styles.chats, { backgroundColor: 'green' }]}>
            <Image
              source={require('./IMG_20231012_202545_535.jpg')}
              style={styles.image}
            />
            <View>
              <Text style={styles.text2}>Bikash Kumar Agrawal</Text>
              <Text style={styles.text3}>Bikash Kumar Agrawal</Text>
            </View>
            <View>
              <Text style={styles.text4}>01.18 pm</Text>
            </View>
          </View>
          <View style={[styles.chats, { backgroundColor: 'green' }]}>
            <Image
              source={require('./IMG_20231012_202545_535.jpg')}
              style={styles.image}
            />
            <View>
              <Text style={styles.text2}>Bikash Kumar Agrawal</Text>
              <Text style={styles.text3}>Bikash Kumar Agrawal</Text>
            </View>
            <View>
              <Text style={styles.text4}>01.18 pm</Text>
            </View>
          </View>
          <View style={[styles.chats, { backgroundColor: 'green' }]}>
            <Image
              source={require('./IMG_20231012_202545_535.jpg')}
              style={styles.image}
            />
            <View>
              <Text style={styles.text2}>Bikash Kumar Agrawal</Text>
              <Text style={styles.text3}>Bikash Kumar Agrawal</Text>
            </View>
            <View>
              <Text style={styles.text4}>01.18 pm</Text>
            </View>
          </View>
          <View style={[styles.chats, { backgroundColor: 'green' }]}>
            <Image
              source={require('./IMG_20231012_202545_535.jpg')}
              style={styles.image}
            />
            <View>
              <Text style={styles.text2}>Bikash Kumar Agrawal</Text>
              <Text style={styles.text3}>Bikash Kumar Agrawal</Text>
            </View>
            <View>
              <Text style={styles.text4}>01.18 pm</Text>
            </View>
          </View>
          <View style={[styles.chats, { backgroundColor: 'green' }]}>
            <Image
              source={require('./IMG_20231012_202545_535.jpg')}
              style={styles.image}
            />
            <View>
              <Text style={styles.text2}>Bikash Kumar Agrawal</Text>
              <Text style={styles.text3}>Bikash Kumar Agrawal</Text>
            </View>
            <View>
              <Text style={styles.text4}>01.18 pm</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer2}>
        <View style={[styles.chats, { backgroundColor: '' }]}>
          <View style={styles.box2}>
            <Text style={styles.footer}>Chats</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.footer}>Updates</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.footer}>Communities</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.footer}>Calls</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    flex: 7,
  },
  footer2: {
    flex: 1,
  },
  text: {
    fontSize: 23,
    margin: 3,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: 30,
    height: 30,
  },
  chats: {
    margin: 5,
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 40,
  },
  text2: {
    fontSize: 20,
  },
  text3: {
    fontSize: 14,
  },
  text4: {
    fontSize: 10,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  box2: {
    height: 50,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    fontSize: 16,
    fontWeight: 600,
  },
});
