import React, { useState } from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  ScrollView, 
  Image, 
  TextInput,
  TouchableOpacity,
  Dimensions 
} from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Recommended');

  const categories = ['Recommended', 'Europe', 'Asia', 'North America', 'South America', 'Africa'];

  const posts = [
    {
      id: 1,
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/vinlxzc9_expires_30_days.png',
      },
      location: 'Santorini, Greece',
      rating: 5.0,
      likes: 234,
      comments: 16,
      image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/0q1lgz0i_expires_30_days.png',
      caption: 'Amazing sunset views! This place is absolutely magical ',
      isVideo: true,
      duration: '2:34'
    },
    {
      id: 2,
      user: {
        name: 'Mike Chen',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/xbegbmh1_expires_30_days.png',
      },
      location: 'Tokyo, Japan',
      rating: 4.5,
      likes: 189,
      comments: 31,
      image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/askufte8_expires_30_days.png',
      caption: 'Street food adventure in Shibuya! Must try the ramen here ',
      isVideo: false
    },
    {
      id: 3,
      user: {
        name: 'Emma Wilson',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/e0v047vl_expires_30_days.png',
      },
      location: 'New York, USA',
      rating: 4.9,
      likes: 412,
      comments: 12,
      image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/6xu8oj7u_expires_30_days.png',
      caption: 'Central Park in autumn is breathtaking 🍂',
      isVideo: true,
      duration: '1:12'
    },
    {
      id: 4,
      user: {
        name: 'Carlos Rodriguez',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/4lkzjkno_expires_30_days.png',
      },
      location: 'Barcelona, Spain',
      rating: 4.8,
      likes: 156,
      comments: 8,
      image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/594e0cdu_expires_30_days.png',
      caption: "Gaudi's architecture never fails to amaze me",
      isVideo: false
    },
    {
      id: 5,
      user: {
        name: 'Lisa Park',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/ft0q3w4r_expires_30_days.png',
      },
      location: 'Seoul, Korea',
      rating: 4.8,
      likes: 298,
      comments: 22,
      image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/rdm19ujb_expires_30_days.png',
      caption: 'Korean BBQ night with friends! 🥩',
      isVideo: true,
      duration: '3:45'
    },
    {
      id: 6,
      user: {
        name: 'David Kim',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/om2o9rmx_expires_30_days.png',
      },
      location: 'London, UK',
      rating: 4.2,
      likes: 89,
      comments: 12,
      image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/575bkkic_expires_30_days.png',
      caption: 'Rainy day at Big Ben, still beautiful!',
      isVideo: false
    },
    {
      id: 7,
      user: {
        name: 'Maria Santos',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/qry2mhz4_expires_30_days.png',
      },
      location: 'Rio de Janeiro, Brazil',
      rating: 4.7,
      likes: 342,
      comments: 42,
      image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/zsdtww79_expires_30_days.png',
      caption: 'Copacabana beach vibes are unmatched! 🏖️',
      isVideo: true,
      duration: '4:12'
    },
    {
      id: 8,
      user: {
        name: 'Alex Turner',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/e8h0ygqm_expires_30_days.png',
      },
      location: 'Sydney, Australia',
      rating: 4.0,
      likes: 167,
      comments: 56,
      image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/q6f4yi8s_expires_30_days.png',
      caption: 'Opera House at sunset - pure magic ✨',
      isVideo: true,
      duration: '2:58'
    },
    {
      id: 9,
      user: {
        name: 'Sophie Laurent',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/dm49e6xd_expires_30_days.png',
      },
      location: 'Paris, France',
      rating: 4.9,
      likes: 521,
      comments: 60,
      image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/50md1aig_expires_30_days.png',
      caption: 'Eiffel Tower never gets old 🇫🇷',
      isVideo: false
    },
    {
      id: 10,
      user: {
        name: 'Ahmed Hassan',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/6pdl8ldl_expires_30_days.png',
      },
      location: 'Dubai, UAE',
      rating: 5.0,
      likes: 389,
      comments: 28,
      image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/4qu6dnzi_expires_30_days.png',
      caption: 'Burj Khalifa views from the top! 🏢',
      isVideo: true,
      duration: '1:45'
    },
    {
      id: 11,
      user: {
        name: 'Nina Petrov',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/bckqhiui_expires_30_days.png',
      },
      location: 'Moscow, Russia',
      rating: 5.0,
      likes: 234,
      comments: 19,
      image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/4dp1aaq3_expires_30_days.png',
      caption: 'Red Square in winter is magical ❄️',
      isVideo: true,
      duration: '3:21'
    },
    {
      id: 12,
      user: {
        name: 'Tom Anderson',
        avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/vht18voq_expires_30_days.png',
      },
      location: 'Cape Town, South Africa',
      rating: 5.0,
      likes: 445,
      comments: 33,
      image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/2vdj9ib7_expires_30_days.png',
      caption: 'Table Mountain hike was incredible! 🏔️',
      isVideo: true,
      duration: '5:12'
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
      
      {/* Video indicator */}
      {post.isVideo && (
        <View style={{
          position: 'absolute',
          top: 8,
          left: 8,
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderRadius: 12,
          paddingHorizontal: 8,
          paddingVertical: 4,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/7n3wcgua_expires_30_days.png' }}
            style={{ width: 12, height: 12, marginRight: 4 }}
          />
          <Text style={{ color: '#FFFFFF', fontSize: 10 }}>{post.duration}</Text>
        </View>
      )}

      {/* Rating and like button */}
      <View style={{
        position: 'absolute',
        top: 8,
        right: 8,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <View style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderRadius: 12,
          paddingHorizontal: 6,
          paddingVertical: 2,
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 8
        }}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/vinlxzc9_expires_30_days.png' }}
            style={{ width: 10, height: 10, marginRight: 2 }}
          />
          <Text style={{ color: '#FFFFFF', fontSize: 9 }}>{post.rating}</Text>
        </View>
        
        <TouchableOpacity
          onPress={() => console.log('Liked post:', post.id)}
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            borderRadius: 12,
            padding: 6
          }}
        >
          <Image
            source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/acowtnir_expires_30_days.png' }}
            style={{ width: 16, height: 16 }}
          />
        </TouchableOpacity>
      </View>

      {/* User info overlay */}
      <View style={{
        position: 'absolute',
        bottom: 8,
        left: 8,
        right: 8
      }}>
        <View style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderRadius: 8,
          padding: 8
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
            <Image
              source={{ uri: post.user.avatar }}
              style={{ width: 20, height: 20, borderRadius: 10, marginRight: 6 }}
            />
            <Text style={{ color: '#FFFFFF', fontSize: 11, fontWeight: 'bold' }}>
              {post.user.name}
            </Text>
          </View>
          <Text style={{ color: '#FFFFFF', fontSize: 10, marginBottom: 2 }}>
            {post.location}
          </Text>
          <Text 
            style={{ color: '#FFFFFF', fontSize: 9, opacity: 0.9 }}
            numberOfLines={2}
          >
            {post.caption}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 9, marginRight: 12 }}>
               {post.likes}
            </Text>
            <Text style={{ color: '#FFFFFF', fontSize: 9 }}>
               {post.comments}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
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
          paddingVertical: 15,
          borderTopWidth: 1,
          borderTopColor: "#D0D0D0",
        }}>
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 34,
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/c1txpgcc_expires_30_days.png" }} 
                resizeMode="stretch"
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => navigation.navigate('AITravelAgent')}
              style={{
                backgroundColor: '#007AFF',
                borderRadius: 14,
                padding: 4
              }}
            >
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/ja0fjaox_expires_30_days.png" }} 
                resizeMode="stretch"
                style={{ width: 28, height: 28 }}
              />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/7n3wcgua_expires_30_days.png" }} 
                resizeMode="stretch"
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/5fjoe8j2_expires_30_days.png" }} 
                resizeMode="stretch"
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
