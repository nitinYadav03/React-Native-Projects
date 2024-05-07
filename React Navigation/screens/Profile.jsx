import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const Profile = () => {
  function openWebsite(link) {
    Linking.openURL(link);
  }
  const contacts = [
    {
      uid: 1,
      name: 'Nitin Yadav',
      status: 'React Native Developer',
      image: require('../images/nitin.jpg'),
      url: 'https://www.linkedin.com/in/nitin-b-yadav/'
    },
    {
      uid: 2,
      name: 'Kisan Majumdar',
      status: 'React Native Developer',
      image: require('../images/kisan.jpeg'),
      url: 'https://www.linkedin.com/in/kisansmajumdar/'
    },
    {
      uid: 3,
      name: 'Prince Kumar',
      status: '.Net Developer',
      image: require('../images/prince.jpeg'),
      url: 'https://www.linkedin.com/in/kpsingho7/'
    },
    {
      uid: 4,
      name: 'Jay Patel',
      status: 'React Developer',
      image: require('../images/jay.jpeg'),
      url: 'https://www.linkedin.com/in/jay190patel/'
    },
    {
      uid: 5,
      name: 'Vishal Talaviya',
      status: 'React Developer',
      image: require('../images/vishal.jpeg'),
      url: 'https://www.linkedin.com/in/vishal-talaviya-768114249/'
    },
    {
      uid: 6,
      name: 'Krunal Pokar',
      status: 'Web Developer',
      image: require('../images/krunal.jpeg'),
      url: 'https://www.linkedin.com/in/krunal-pokar-a12068226/'
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView>
        {contacts.map(({uid, name, status, image, url}) => (
          <TouchableOpacity key={uid} onPress={() => openWebsite(url)}>
            <View style={styles.userCard}>
              <Image source={image} style={styles.userImage} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'darkblue',
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 15,
  },
});
