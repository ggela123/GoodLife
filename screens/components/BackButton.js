import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

export default function BackButton({ navigation, onPress, style, accessibilityLabel = 'Go back' }) {
  const handlePress = onPress || (() => navigation && navigation.goBack && navigation.goBack());

  // sensible default spacing used across onboarding screens; callers can override by passing `style`
  const defaultStyle = { marginTop: 25, marginBottom: 24, marginLeft: 13, padding: 5 };

  return (
    <TouchableOpacity
      onPress={handlePress}
      accessibilityLabel={accessibilityLabel}
      style={[defaultStyle, style]}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Image
        source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/9c72p067_expires_30_days.png' }}
        resizeMode="stretch"
        style={{ width: 15, height: 15 }}
      />
    </TouchableOpacity>
  );
}
