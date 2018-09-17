# @kiwicom/react-native-reverse-geocode

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

// TODO: What to do with the module?
RNReverseGeocode;
```

## License

See [License](./LICENSE)
