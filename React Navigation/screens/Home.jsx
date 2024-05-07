import {StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity} from 'react-native';
import React from 'react';

const TajMahal = require('../images/TajMahal.jpg');
const HawaMahal = require('../images/HawaMahal.jpg');
const Golden = require('../images/Golden.jpg');
const Hampi = require('../images/hampi.jpg');
const Ellora = require('../images/Ellora.jpg');

const Home = () => {
  function openWebsite(link) {
    Linking.openURL(link);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headingText}>Tourist Places</Text>

        <View style={styles.card}>
          <Image source={TajMahal} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Agra, Uttar Pradesh</Text>
            <Text style={styles.cardDesc}>
              The Taj Mahal was designated as a UNESCO World Heritage Site in
              1983 for being “the jewel of Muslim art in India and one of the
              universally admired masterpieces of the world's heritage”.
            </Text>
          </View>
            <TouchableOpacity onPress={()=>openWebsite('https://whc.unesco.org/en/list/252/')}>
              <Text
                style={styles.cardButton}
              >
                Read More
              </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={HawaMahal} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Jaipur, Rajashtan</Text>
            <Text style={styles.cardDesc}>
            The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation. It has a curved architecture that leans at an 87 degree angle, and a pyramidal shape which has helped it stay erect for centuries. The Hawa Mahal is dedicated to Lord Krishna.
            </Text>
          </View>
          <TouchableOpacity onPress={()=>openWebsite('https://www.hawa-mahal.com/')}>
              <Text
                style={styles.cardButton}
              >
                Read More
              </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={Golden} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Golden Temple</Text>
            <Text style={styles.cardLabel}>Amritsar, Punjab</Text>
            <Text style={styles.cardDesc}>
            The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs. The Mandir is built on a 67-ft square of marble and is a two storied structure. Maharaja Ranjit Singh had the upper half of the building built with approximately 400 kg of gold leaf.
            </Text>
          </View>
          <TouchableOpacity onPress={()=>openWebsite('https://artsandculture.google.com/story/the-golden-temple-amritsar-incredibleindia/pQXhVQ2ZBkn7KQ?hl=en')}>
              <Text
                style={styles.cardButton}
              >
                Read More
              </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={Hampi} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Hampi</Text>
            <Text style={styles.cardLabel}>Vijayanagar, Karnataka</Text>
            <Text style={styles.cardDesc}>
            Hampi is a UNESCO World Heritage Site located in the state of Karnataka, India. It was once the capital of the Vijayanagara Empire and is known for its rich cultural heritage, stunning architectural ruins, and spiritual significance.
            </Text>
          </View>
          <TouchableOpacity onPress={()=>openWebsite('https://karnatakatourism.org/tour-item/hampi/')}>
              <Text
                style={styles.cardButton}
              >
                Read More
              </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={Ellora} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Ellora Caves</Text>
            <Text style={styles.cardLabel}>Aurangabad, Maharashtra</Text>
            <Text style={styles.cardDesc}>
            The Ellora Caves are a UNESCO World Heritage Site in Aurangabad district, Maharashtra, India. It is one of the largest rock-cut Hindu temple cave complexes in the world, with artwork dating from the period 600–1000 CE, also including several Buddhist and Jain "caves".
            </Text>
          </View>
          <TouchableOpacity onPress={()=>openWebsite('https://indiaculture.gov.in/ellora-caves')}>
              <Text
                style={styles.cardButton}
              >
                Read More
              </Text>
            </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'darkblue',
  },
  card: {
    width: '95%',
    margin: 5,
    padding: 5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardInfo: {
    padding: 8,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 14,
    color: 'gray',
    fontStyle: 'italic',
    marginBottom: 8,
    fontWeight: 'semibold',
  },
  cardDesc: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
    color: '#3c3c3c',
  },
  cardButton: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'darkblue',
    paddingLeft: 10,
    textDecorationLine: 'underline',
  }
});
