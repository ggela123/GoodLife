import React, { useState } from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  ScrollView, 
  Image, 
  TextInput,
  TouchableOpacity,
  Dimensions,
  PanResponder 
} from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Recommended');

  // Screen navigation order for swipe gestures
  const screenOrder = ['Home', 'AITravelAgent', 'Messages', 'Profile'];
  const currentScreenIndex = 0; // Home is index 0

  // Swipe gesture handler
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      // Only respond to horizontal swipes with sufficient movement
      return Math.abs(gestureState.dx) > Math.abs(gestureState.dy) && Math.abs(gestureState.dx) > 20;
    },
    onPanResponderGrant: () => {
      // Gesture started
    },
    onPanResponderMove: () => {
      // Gesture is moving
    },
    onPanResponderRelease: (evt, gestureState) => {
      const swipeThreshold = 50;
      
      if (gestureState.dx > swipeThreshold) {
        // Swiped right - go to previous screen
        if (currentScreenIndex > 0) {
          const previousScreen = screenOrder[currentScreenIndex - 1];
          navigation.navigate(previousScreen);
        }
      } else if (gestureState.dx < -swipeThreshold) {
        // Swiped left - go to next screen
        if (currentScreenIndex < screenOrder.length - 1) {
          const nextScreen = screenOrder[currentScreenIndex + 1];
          navigation.navigate(nextScreen);
        }
      }
    },
  });

  const categories = ['Recommended', 'Europe', 'Asia', 'North America', 'South America', 'Africa'];

  const posts = [
    {
      id: 1,
      user: {
        name: 'Hans Berg',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/vinlxzc9_expires_30_days.png',
      },
      location: 'Wallis, Switzerland',
      rating: 5.0,
      likes: 234,
      comments: 16,
      image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/HansBerngif.gif',
      caption: 'Hiking the Swiss Alps was a dream come true! 🏔️',
      isVideo: true,
      duration: '2:34',
      flag: '🇨🇭'
    },
    {
      id: 2,
      user: {
        name: 'Ivan Petrov',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/xbegbmh1_expires_30_days.png',
      },
      location: 'Dubrovnik, Croatia',
      rating: 4.5,
      likes: 189,
      comments: 31,
      image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/croatia.gif',
      caption: 'Street food adventure in Shibuya! Must try the ramen here ',
      isVideo: false,
      flag: '🇭🇷'
    },
    {
      id: 3,
      user: {
        name: 'Anneliese Muller',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/e0v047vl_expires_30_days.png',
      },
      location: 'Garmisch-Partenkirchen, Germany',
      rating: 4.9,
      likes: 412,
      comments: 12,
      image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/Anneliese%20Muller.gif',
      caption: 'Central Park in autumn is breathtaking 🍂',
      isVideo: true,
      duration: '1:12',
      flag: '🇩🇪'
    },
    {
      id: 4,
      user: {
        name: 'John Smith',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/4lkzjkno_expires_30_days.png',
      },
      location: 'York, United Kingdom',
      rating: 4.8,
      likes: 156,
      comments: 8,
      image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/uk.gif',
      caption: "Gaudi's architecture never fails to amaze me",
      isVideo: false,
      flag: '🇬🇧'
    },
    {
      id: 5,
      user: {
        name: 'Lena Fischer',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/ft0q3w4r_expires_30_days.png',
      },
      location: 'Munich, Germany',
      rating: 4.8,
      likes: 298,
      comments: 22,
      image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/germany2.gif',
      caption: 'Korean BBQ night with friends! 🥩',
      isVideo: true,
      duration: '3:45',
      flag: '🇩🇪'
    },
    {
      id: 6,
      user: {
        name: 'Erik Svensson',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/om2o9rmx_expires_30_days.png',
      },
      location: 'Kiruna, Sweden',
      rating: 4.2,
      likes: 89,
      comments: 12,
      image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/sweden.gif',
      caption: 'Rainy day at Big Ben, still beautiful!',
      isVideo: false,
      flag: '🇸🇪'
    },
    {
      id: 7,
      user: {
        name: 'Maria Santos',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/qry2mhz4_expires_30_days.png',
      },
      location: 'Oslo, Norway',
      rating: 4.7,
      likes: 342,
      comments: 42,
      image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/norway.gif',
      caption: 'Copacabana beach vibes are unmatched! 🏖️',
      isVideo: true,
      duration: '4:12',
      flag: '🇳🇴'
    },
    {
      id: 8,
      user: {
        name: 'Claire Dubois',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/e8h0ygqm_expires_30_days.png',
      },
      location: 'Paris, France',
      rating: 4.0,
      likes: 167,
      comments: 56,
      image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/france.gif',
      caption: 'Opera House at sunset - pure magic ✨',
      isVideo: true,
      duration: '2:58',
      flag: '🇫🇷'
    },
    {
      id: 9,
      user: {
        name: 'Sophie Laurent',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/dm49e6xd_expires_30_days.png',
      },
      location: 'Vienna, Austria',
      rating: 4.9,
      likes: 521,
      comments: 60,
      image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/austria.gif',
      caption: 'Eiffel Tower never gets old 🇫🇷',
      isVideo: false,
      flag: '🇦🇹'
    },
    {
      id: 10,
      user: {
        name: 'Liam O\'Connor',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/6pdl8ldl_expires_30_days.png',
      },
      location: 'Dublin, Ireland',
      rating: 5.0,
      likes: 389,
      comments: 28,
      image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/ireland.gif',
      caption: 'Burj Khalifa views from the top! 🏢',
      isVideo: true,
      duration: '1:45',
      flag: '🇮🇪'
    },
    {
      id: 11,
      user: {
        name: 'Emma Jansen',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/bckqhiui_expires_30_days.png',
      },
      location: 'Amsterdam, Netherlands',
      rating: 5.0,
      likes: 234,
      comments: 19,
      image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/netherlands.gif',
      caption: 'Red Square in winter is magical ❄️',
      isVideo: true,
      duration: '3:21',
      flag: '🇳🇱'
    },
    {
      id: 12,
      user: {
        name: 'Oliver Brown',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/vht18voq_expires_30_days.png',
      },
      location: 'London, United Kingdom',
      rating: 5.0,
      likes: 445,
      comments: 33,
      image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/uk2.gif',
      caption: 'Table Mountain hike was incredible! 🏔️',
      isVideo: true,
      duration: '5:12',
      flag: '🇬🇧'
    }
  ];

  const renderPost = (post) => (
    <TouchableOpacity 
      key={post.id} 
      style={{ 
        flex: 1, 
        margin: 1,
        position: 'relative'
      }}
      onPress={() => {
        if (post.isVideo) {
          console.log('Playing video:', post.id);
        }
      }}
    >
      <Image
        source={{ uri: post.image }}
        style={{
          width: '100%',
          height: 150,
          borderRadius: 8
        }}
        resizeMode="cover"
      />
      
      {/* Rating - top left corner */}
      <View style={{
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Image
          source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/vinlxzc9_expires_30_days.png' }}
          style={{ width: 10, height: 10, marginRight: 2 }}
        />
        <Text style={{ color: '#FFFFFF', fontSize: 9 }}>{post.rating}</Text>
      </View>

      {/* Country flag - top right corner */}
      <View style={{
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2
      }}>
        <Text style={{ fontSize: 12 }}>{post.flag || '🏳️'}</Text>
      </View>

      {/* Views - bottom right corner */}
      <View style={{
        position: 'absolute',
        bottom: 8,
        right: 8,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2
      }}>
        <Text style={{ color: '#FFFFFF', fontSize: 9 }}>{post.likes}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} {...panResponder.panHandlers}>
      <View style={{ flex: 1 }}>
        {/* Scrollable Content */}
        <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
          {/* Search Bar */}
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            paddingVertical: 14,
            paddingHorizontal: 23,
          }}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/18bcrmj6_expires_30_days.png" }} 
              resizeMode="stretch"
              style={{
                width: 18,
                height: 18,
                marginRight: 10,
              }}
            />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Location or keywords"
              placeholderTextColor="#B7B7B7"
              style={{
                color: "#2C2C2C",
                fontSize: 12,
                flex: 1,
              }}
            />
            <TouchableOpacity 
              onPress={() => console.log('Filter pressed')}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/oas9ox5f_expires_30_days.png" }} 
                resizeMode="stretch"
                style={{
                  width: 18,
                  height: 18,
                  marginRight: 3,
                }}
              />
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/k0di04zu_expires_30_days.png" }} 
                resizeMode="stretch"
                style={{
                  width: 9,
                  height: 5,
                  marginRight: 17,
                }}
              />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => console.log('Menu pressed')}>
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/fxowwkx7_expires_30_days.png" }} 
                resizeMode="stretch"
                style={{
                  width: 18,
                  height: 18,
                }}
              />
            </TouchableOpacity>
          </View>

          {/* Category Filter */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={{
              backgroundColor: "#FFFFFF",
              paddingVertical: 10,
              paddingLeft: 22,
              marginBottom: 1,
            }}
          >
            {categories.map((category, index) => (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)}
                style={{ marginRight: index === categories.length - 1 ? 22 : 15 }}
              >
                <Text style={{
                  color: selectedCategory === category ? "#2C2C2C" : "#B7B7B7",
                  fontSize: 14,
                  fontWeight: selectedCategory === category ? 'bold' : 'normal'
                }}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Posts Grid */}
          <View style={{ paddingHorizontal: 2, paddingBottom: 100 }}>
            <View style={{ flexDirection: "row", marginBottom: 2 }}>
              {posts.slice(0, 3).map(renderPost)}
            </View>
            
            <View style={{ flexDirection: "row", marginBottom: 2 }}>
              {posts.slice(3, 6).map(renderPost)}
            </View>
            
            <View style={{ flexDirection: "row", marginBottom: 2 }}>
              {posts.slice(6, 9).map(renderPost)}
            </View>
            
            <View style={{ flexDirection: "row", marginBottom: 2 }}>
              {posts.slice(9, 12).map(renderPost)}
            </View>
          </View>
        </ScrollView>

        {/* Fixed Bottom Navigation */}
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#FFFFFF",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 16,
          }}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Home')}
              style={{
                backgroundColor: '#007AFF',
                borderRadius: 12,
                padding: 8,
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/c1txpgcc_expires_30_days.png" }} 
                resizeMode="stretch"
                style={{ width: 20, height: 20, tintColor: '#FFFFFF' }}
              />
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => navigation.navigate('AITravelAgent')}
              style={{
                padding: 8,
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/ja0fjaox_expires_30_days.png" }} 
                resizeMode="stretch"
                style={{ width: 24, height: 24, tintColor: '#8E8E93' }}
              />
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => navigation.navigate('Messages')}
              style={{
                padding: 8,
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/7n3wcgua_expires_30_days.png" }} 
                resizeMode="stretch"
                style={{ width: 24, height: 24, tintColor: '#8E8E93' }}
              />
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => navigation.navigate('Profile')}
              style={{
                padding: 8,
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/5fjoe8j2_expires_30_days.png" }} 
                resizeMode="stretch"
                style={{ width: 24, height: 24, tintColor: '#8E8E93' }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
