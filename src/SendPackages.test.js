import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import SendPackages from './SendPackages';

// Mock @react-native-maps
// jest.mock('react-native-maps', () => 'MapView');

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
  FontAwesome: 'FontAwesome', // Mock the specific icon component you're using
}));

// Mock useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('SendPackages', () => {
  it('renders correctly', () => {
    // Mock useNavigation behavior
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    // Render the Pickup component
    const tree = renderer.create(<SendPackages />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
