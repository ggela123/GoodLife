# GoodLife - React Native/Expo Project Guide

## Project Overview

This is a React Native mobile app built with Expo SDK ~54.0.10 and React Native 0.81.4. The app targets iOS, Android, and web platforms with cross-platform compatibility.

## Architecture & Structure

### Core Files

- **`App.js`** - Main app component with basic UI structure
- **`index.js`** - Entry point that registers the root component with Expo
- **`app.json`** - Expo configuration with platform-specific settings
- **`package.json`** - Dependencies and build scripts

### Directory Structure

- **`screens/`** - Currently empty, intended for screen components
- **`assets/`** - Contains app icons and splash screens for all platforms
- **`.expo/`** - Expo development artifacts (auto-generated)

## Development Workflow

### Essential Commands

- **`npm start`** or **`expo start`** - Start development server
- **`npm run android`** - Launch Android emulator/device
- **`npm run ios`** - Launch iOS simulator/device
- **`npm run web`** - Launch web version in browser

### Platform-Specific Features

- **Android**: Uses adaptive icons (`adaptive-icon.png`), edge-to-edge enabled
- **iOS**: Tablet support enabled
- **Web**: Custom favicon configured
- **Universal**: Portrait orientation only, light UI style

## Key Patterns & Conventions

### Component Structure

- Main app follows functional component pattern with hooks
- StyleSheet defined at component bottom using `StyleSheet.create()`
- Expo StatusBar component used for status bar styling

### Configuration Approach

- Expo's new architecture enabled (`"newArchEnabled": true`)
- All platform assets centralized in `/assets`
- Single source of truth for app metadata in `app.json`

### Asset Management

- Icon variants for different platforms (icon.png, adaptive-icon.png, favicon.png)
- Splash screen using contain resize mode with white background
- All assets follow Expo naming conventions

## Development Guidelines

### Adding New Screens

- Create components in `screens/` directory
- Import navigation library when implementing multi-screen navigation
- Follow React Native navigation patterns for routing

### Styling Approach

- Use StyleSheet.create() for performance optimization
- Follow flex-based layouts (container uses flex: 1)
- Consistent alignment patterns (center alignment established)

### Platform Testing

Test across all three platforms during development:

```bash
npm run android  # Test Android-specific features
npm run ios      # Test iOS-specific features
npm run web      # Test web compatibility
```

### Dependencies

- Keep React Native version aligned with Expo SDK compatibility
- Use Expo-managed workflow for simplified development
- Core dependencies: expo, expo-status-bar, react, react-native

## Current State

The app is in initial setup phase with:

- Basic "Hello World" UI in place
- All platform configurations ready
- Empty screens directory ready for feature development
- Standard Expo project structure established

When adding features, prioritize cross-platform compatibility and follow Expo best practices for managed workflow projects.
