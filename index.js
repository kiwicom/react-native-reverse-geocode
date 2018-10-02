// @flow

import { NativeModules } from 'react-native';

const { RNReverseGeocode } = NativeModules;

type Location = {|
  +latitude: number,
  +longitude: number,
|};

type Address = {|
  name: string,
  address: string,
  location: Location,
|};

type Result = $ReadOnlyArray<Address>;

type Region = {|
  ...Location,
  +latitudeDelta: number,
  +longitudeDelta: number,
|};

type Callback = (err: string, res: Result) => void;

const debounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

const searchForLocations = (
  searchText: string,
  region: Region,
  callback: Callback,
  debounceMs: number = 200,
) => {
  debounce(
    RNReverseGeocode.searchForLocations(searchText, region, callback),
    debounceMs,
  );
};

export default { searchForLocations };
