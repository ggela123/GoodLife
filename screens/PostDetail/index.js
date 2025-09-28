import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

export default function PostDetail({ route, navigation }) {
  const { post } = route.params || {};

  if (!post) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ width: '100%', height: Math.round(width * 1.6), backgroundColor: '#000' }}>
          <Image source={{ uri: post.image }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} resizeMode="cover" />

          {/* Back button */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 16, left: 12, padding: 8 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>←</Text>
          </TouchableOpacity>

          {/* Flag badge */}
          <View style={{ position: 'absolute', top: 12, right: 12, backgroundColor: '#fff', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 6 }}>
            <Text style={{ fontSize: 14 }}>{post.flag}</Text>
          </View>

          {/* Right vertical action column (overlay) */}
          <View style={{ position: 'absolute', right: 12, top: '18%', alignItems: 'center' }}>
            {/* Star / rating */}
            <View style={{ alignItems: 'center', marginBottom: 14 }}>
              <TouchableOpacity style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.45)', alignItems: 'center', justifyContent: 'center' }} onPress={() => {}}>
                <Text style={{ color: '#fff', fontSize: 18 }}>★</Text>
              </TouchableOpacity>
              <Text style={{ color: '#fff', fontSize: 11, marginTop: 6 }}>5.0</Text>
            </View>

            {/* User count */}
            <View style={{ alignItems: 'center', marginBottom: 14 }}>
              <TouchableOpacity style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.45)', alignItems: 'center', justifyContent: 'center' }} onPress={() => {}}>
                <Text style={{ color: '#fff', fontSize: 18 }}>👤</Text>
              </TouchableOpacity>
              <Text style={{ color: '#fff', fontSize: 11, marginTop: 6 }}>16</Text>
            </View>

            {/* Send / comment */}
            <View style={{ alignItems: 'center', marginBottom: 14 }}>
              <TouchableOpacity style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.45)', alignItems: 'center', justifyContent: 'center' }} onPress={() => {}}>
                <Text style={{ color: '#fff', fontSize: 18 }}>💬</Text>
              </TouchableOpacity>
              <Text style={{ color: '#fff', fontSize: 11, marginTop: 6 }}>Send</Text>
            </View>

            {/* Save / bookmark */}
            <View style={{ alignItems: 'center', marginBottom: 14 }}>
              <TouchableOpacity style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.45)', alignItems: 'center', justifyContent: 'center' }} onPress={() => {}}>
                <Text style={{ color: '#fff', fontSize: 18 }}>🔖</Text>
              </TouchableOpacity>
              <Text style={{ color: '#fff', fontSize: 11, marginTop: 6 }}>Save</Text>
            </View>

            {/* Share */}
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.45)', alignItems: 'center', justifyContent: 'center' }} onPress={() => {}}>
                <Text style={{ color: '#fff', fontSize: 18 }}>⤴️</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Post metadata */}
        <View style={{ padding: 16, backgroundColor: '#fff' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: post.user.avatar }} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '700' }}>{post.user.name}</Text>
              <Text style={{ color: '#666', fontSize: 12 }}>{post.location}</Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <Text style={{ color: '#007AFF' }}>Share</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 12 }}>
            <Text style={{ fontSize: 14, color: '#333' }}>{post.caption}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
