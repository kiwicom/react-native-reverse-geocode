import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput
} from "react-native";
import RNReverseGeocode from "@kiwicom/react-native-reverse-geocode";

export default class App extends React.Component {
  state = {
    err: null,
    addresses: null,
    region: {
      latitude: 50,
      longitude: 14,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    searchText: ""
  };

  componentDidMount() {
    this.searchForLocations();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      prevState.searchText,
      this.state.searchText,
      prevState.searchText != this.state.searchText
    );
    if (prevState.searchText != this.state.searchText) {
      this.searchForLocations();
    }
  }

  searchForLocations = () => {
    RNReverseGeocode.searchForLocations(
      this.state.searchText,
      this.state.region,
      (err, res) => {
        console.log({
          error: err,
          addresses: res
        });
        this.setState({
          error: err,
          addresses: res
        });
      }
    );
  };

  onChangeText = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Try searching for 'Charles'..."
            onChangeText={this.onChangeText}
          />
        </View>
        <ScrollView>
          {this.state.addresses != null &&
            this.state.addresses.map((address, index) => (
              <Result key={`${address.address}-${index}`} address={address} />
            ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const Result = ({ address }) => (
  <View style={styles.result}>
    <Field>Name (iOS only):</Field>
    <Text>{address.name}</Text>
    <Field>Address:</Field>
    <Text>{address.address}</Text>
    <Field>Latitude:</Field>
    <Text>{address.location.latitude}</Text>
    <Field>Longitude:</Field>
    <Text>{address.location.longitude}</Text>
  </View>
);

const Field = ({ children }) => (
  <Text style={styles.fieldName}>{children}</Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  textInputContainer: {
    width: "90%",
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: "#aaa"
  },
  result: {
    borderWidth: 1,
    padding: 10
  },
  fieldName: {
    marginTop: 5,
    fontWeight: "bold",
    color: "#555",
    fontSize: 10
  }
});
