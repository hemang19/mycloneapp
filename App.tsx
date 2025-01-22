import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
      <StatusBar backgroundColor='#000000' style='light' />
      </View>

      {/* Categories Section */}
      <View style={styles.categories}>
        <Text style={styles.categoryText}>All</Text>
        <Text style={styles.categoryText}>Sports</Text>
        <Text style={styles.categoryText}>Clothes</Text>
      </View>

      {/* Scrollable Image Section */}
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <View style={styles.imageRow}>
          <TouchableOpacity style={styles.imagePlaceholder}>
            <Image
              source={{ uri: 'https://imageio.forbes.com/specials-images/imageserve/6531830aaae52b9426047849/1x1-social-LeBron-James-by-Harry-How-Getty-Images/0x0.jpg?format=jpg&height=1080&width=1459' }}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imagePlaceholder}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAHSjq7Gk3-FboSL_OMkC42bdCkxD12e4mw&s' }}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imageRow}>
          <TouchableOpacity style={styles.imagePlaceholder}>
            <Image
              source={{ uri: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png' }}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imagePlaceholder}>
            <Image
              source={{ uri: 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/08/robert-downey-jr-as-iron-man-in-the-mcu.jpg' }}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imageRow}>
          <TouchableOpacity style={styles.imagePlaceholder}>
            <Image
              source={{ uri: 'https://www.shutterstock.com/image-illustration/this-adorable-cartoon-depiction-features-600nw-2308962209.jpg' }}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imagePlaceholder}>
            <Image
              source={{ uri: 'https://phantom-marca.unidadeditorial.es/4c789dacd093bb3b4213b6a482099385/crop/0x0/2037x1358/resize/828/f/jpg/assets/multimedia/imagenes/2024/09/10/17259965245564.jpg' }}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Image 
            source={require('./assets/home-icon.png')}
            style={styles.navIcon} 
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image 
            source={require('./assets/search-icon.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image 
            source={require('./assets/add-icon.png')} 
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image 
            source={require('./assets/messages-icon.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image 
            source={require('./assets/profile-icon.png')} 
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  time: {
    color: '#fff',
    fontSize: 18,
  },
  categories: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    paddingBottom: 5,
    width: 50,
  },
  imageGrid: {
    alignItems: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  imagePlaceholder: {
    width: '45%',
    height: 150,
    backgroundColor: '#333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000000',
    paddingTop: 5,
    paddingBottom: 10,
    marginHorizontal: 40,
  },
  navButton: {
    alignItems: 'center',
  },
  navIcon: {
    width: 60,
    height: 60,
  },
});
