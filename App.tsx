import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>

        <View style={styles.icons}>
         
        </View>
      </View>

      {/* Categories Section */}
      <View style={styles.categories}>
        <Text style={styles.categoryText}>All</Text>
      </View>

      {/* Scrollable Image Section */}
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <View style={styles.imageRow}>
          {/* Replace 'YOUR_IMAGE_URL' with the link to your image */}
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
            source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngrH8eyx_-ET3o8ffqU7hfYWDld7KUOfTVw&s' }} // Replace with your image URL
            style={styles.navIcon} // Style the image as an icon
          />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
        <Image 
    source={{ uri: 'https://e7.pngegg.com/pngimages/342/516/png-clipart-computer-icons-search-icon-zooming-user-interface-computer-icons-thumbnail.png' }} // Replace this with the URL of your image
    style={styles.navIcon}
  />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
        <Image 
    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/026/220/740/non_2x/create-icon-symbol-design-illustration-vector.jpg' }} // Replace this with the URL of your image
    style={styles.navIcon}
  />
          <Text style={styles.navText}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
        <Image 
    source={{ uri: 'https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-notification-icon-png-image_4187244.jpg' }} // Replace this with the URL of your image
    style={styles.navIcon}
  />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
        <Image 
    source={{ uri: 'https://png.pngtree.com/png-vector/20201226/ourmid/pngtree-line-icon-save-png-image_2644818.jpg' }} // Replace this with the URL of your image
    style={styles.navIcon}
  />
          <Text style={styles.navText}>Saved</Text>
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
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    marginLeft: 10,
    borderRadius: 10,
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
    backgroundColor: '#111',
    paddingVertical: 10,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
  },
  navIcon: {
    width: 30, // Adjust width and height to your desired size
    height: 30, // Adjust as needed
    marginBottom: 5, // Add some spacing between the icon and text
  },
});
