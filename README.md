# @kiwicom/react-native-reverse-geocode

Thin wrapper over MapKit's [`MKLocalSearch`](https://developer.apple.com/documentation/mapkit/mklocalsearch) and Geocoder's [`getFromLocationName`](<https://developer.android.com/reference/android/location/Geocoder.html#getFromLocationName(java.lang.String,%20int,%20double,%20double,%20double,%20double)>).

## Disclaimer

_This is still a work in progress and is suited to one specific usecase._

## Getting started

`$ npm install @kiwicom/react-native-reverse-geocode --save`

### Mostly automatic installation

`$ react-native link @kiwicom/react-native-reverse-geocode`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `@kiwicom/react-native-reverse-geocode` and add `RNReverseGeocode.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReverseGeocode.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`

- Add `import com.kiwi.reversegeocode.RNReverseGeocodePackage;` to the imports at the top of the file
- Add `new RNReverseGeocodePackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':@kiwicom/react-native-reverse-geocode'
   project(':@kiwicom/react-native-reverse-geocode').projectDir = new File(rootProject.projectDir, 	'../node_modules/@kiwicom/react-native-reverse-geocode/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':@kiwicom/react-native-reverse-geocode')
   ```

## Usage

```javascript
import RNReverseGeocode from "@kiwicom/react-native-reverse-geocode";

const region = {
  latitude: 50,
  longitude: 14,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
};

const searchText = "Charles";

RNReverseGeocode.searchForLocations(
  this.props.searchText,
  this.props.region,
  (err, res) => {
    console.log({
      error: err,
      addresses: res
    });
  }
);
```

and you should get similar results (on iOS):

```javascript
{
  error: null,
  addresses: [
    {
      name: "Prague Bridge",
      location: {longitude: 14.411334693431856, latitude: 50.08649403063166},
      address: "Charles Bridge, Karlův most, 118 00 Prague, Czech Republic"
    },
    {
      name: "Sheraton Prague Charles Square Hotel",
      location: {longitude: 14.422428309917, latitude: 50.077311685646},
      address: "Žitná 561/8, 120 00 Prague, Czech Republic"
    },
    {
      name: "Charles Bridge Palace",
      location: {longitude: 14.415033459663391, latitude: 50.08505182184114},
      address: "Anenské náměstí 1, 110 00 Praha, Česká republika"
    },
    {
      name: "Charles University",
      location:  {longitude: 14.420802368359185, latitude: 50.0843581717817},
      address: "Opletalova 26, 110 00 Prague, Czech Republic"
    },
    {
      name: "Hotel Charles Central",
      location: {longitude: 14.4520895183086, latitude: 50.0933086545776},
      address: "Thámova 117/26, 186 00 Prague, Czech Republic"
    },
    {
      name: "Moods Charles Bridge",
      location: {longitude: 14.414653540861101, latitude: 50.084306327469044},
      address: "Náprstkova 6, 110 00 Prague, Czech Republic"
    },
    {
      name: "Charles",
      location: {longitude: 14.405249099444005, latitude: 50.08762292985475},
      address: "Josefská 1, 118 00 Prague, Czech Republic"
    },
    {
      name: "Archibald At the Charles Bridge",
      location:  {longitude: 14.408739869235935, latitude: 50.085910196031264},
      address: "Na Kampě 15, 118 00 Prague, Czech Republic"
    },
    {
      name: "Charles Bridge Restaurant",
      location: {longitude: 14.413779917788725, latitude: 50.08589906996886},
      address: "Smetanovo nábřeží 195, 110 00 Prague, Czech Republic"
    },
    {
      name: "Muzeum Karlova mostu",
      location: {longitude: 14.413869380950928, latitude: 50.08649403063166},
      address: "Křižovnické náměstí 3, 110 00 Prague, Czech Republic"
    }
  ]
}
```

## License

See [License](https://raw.githubusercontent.com/kiwicom/react-native-reverse-geocode/master/LICENSE)
