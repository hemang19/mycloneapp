import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar backgroundColor='#000000' style='light'/>

      {/* Categories Section (Top Nav) -------------------------------------------------------------------------- */}
      <View style={styles.categories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Text style={{ ...styles.categoryText, borderBottomColor: '#ffffff', borderBottomWidth: 2}}>All</Text>
        <Text style={styles.categoryText}>Sports</Text>
        <Text style={styles.categoryText}>Clothes</Text>
        <Text style={styles.categoryText}>Electronics</Text>
        <Text style={styles.categoryText}>Food</Text>
        <Text style={styles.categoryText}>Books</Text>
        </ScrollView>
      </View>

      {/* Main Content Section ------------------------------------------------------------------------------- */}
      <ScrollView contentContainerStyle={styles.imageGrid}>
        {/* Right Column Section */}
        <View style={styles.imageColumn}>
          {/* Right Column Images */}
          <TouchableOpacity style={styles.imageRow}>
            <Image
              source={{ uri: 'https://imageio.forbes.com/specials-images/imageserve/6531830aaae52b9426047849/1x1-social-LeBron-James-by-Harry-How-Getty-Images/0x0.jpg?format=jpg&height=1080&width=1459' }}
              style={styles.image}
            />
            <Image
              source={require('./assets/see-more-icon.png')}
              style={styles.seeMoreIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageRow}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAHSjq7Gk3-FboSL_OMkC42bdCkxD12e4mw&s' }}
              style={styles.image}
            />
            <Image
              source={require('./assets/see-more-icon.png')}
              style={styles.seeMoreIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageRow}>
            <Image
              source={{ uri: 'https://phantom-marca.unidadeditorial.es/4c789dacd093bb3b4213b6a482099385/crop/0x0/2037x1358/resize/828/f/jpg/assets/multimedia/imagenes/2024/09/10/17259965245564.jpg' }}
              style={styles.image}
            />
            <Image
              source={require('./assets/see-more-icon.png')}
              style={styles.seeMoreIcon}
            />
          </TouchableOpacity>
        </View>
        
        {/* Left Column Section */}
        <View style={styles.imageColumn}>
          {/* Left Column Images */}
          <TouchableOpacity style={styles.imageRow}>
            <Image
              source={{ uri: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png' }}
              style={styles.image}
            />
            <Image
              source={require('./assets/see-more-icon.png')}
              style={styles.seeMoreIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageRow}>
            <Image
              source={{ uri: 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/08/robert-downey-jr-as-iron-man-in-the-mcu.jpg' }}
              style={styles.image}
            />
            <Image
              source={require('./assets/see-more-icon.png')}
              style={styles.seeMoreIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageRow}>
            <Image
              source={{ uri: 'https://www.shutterstock.com/image-illustration/this-adorable-cartoon-depiction-features-600nw-2308962209.jpg' }}
              style={styles.image}
            />
            <Image
              source={require('./assets/see-more-icon.png')}
              style={styles.seeMoreIcon}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation ------------------------------------------------------------------------------- */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 30,
  },

  // Categories Section (Top Nav)
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000000',
    paddingTop: 15,
    paddingBottom: 10,
    marginHorizontal: 15,
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 14,
    textAlign: 'center',
  },

  // Content Section
  imageGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  imageColumn: {
    width: '48%',
    marginBottom: 10,
  },
  imageRow: {
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    maxHeight: 300, // max height not applying to various images
    borderRadius: 15,
  },
  seeMoreIcon: {
    alignSelf: 'flex-end',
    width: 20,
    height: 20,
    backgroundColor: '#fff',
  },

  // Bottom Navigation
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
