// @flow

import { NativeModules } from 'react-native';
import type { Region } from './models/Location';
import type { Callback } from './models/Callback';
import debounce from './utils/debounce';

const { RNReverseGeocode } = NativeModules;

const searchForLocations = (
  searchText: string,
  region: Region,
  callback: Callback,
  debounceMs: number = 200
) => {
  debounce(
    RNReverseGeocode.searchForLocations(searchText, region, callback),
    debounceMs
  );
};

// This method is not available on iOS.
// We can imply that Geocoding implementation will be always available.
const isPresent = (
  callback: Callback,
  debounceMs: number = 200
) => {
  debounce(
    () => callback(true),
    debounceMs
  );
};

export default { searchForLocations, isPresent };
