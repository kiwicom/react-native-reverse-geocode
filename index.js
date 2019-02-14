'use strict';

import { Platform } from "react-native";
import iOSGeocoder from "./index.ios.js";
import AndroidGeocoder from "./index.android.js";

const Geocoder = Platform.OS === "ios"
  ? iOSGeocoder
  : AndroidGeocoder;

export default Geocoder;
