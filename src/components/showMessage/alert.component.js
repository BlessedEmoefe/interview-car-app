import { ToastAndroid, Platform, Alert } from "react-native";

export default (msg) => {
  if (Platform.OS === "android") {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50
    );
  } else {
    Alert.alert(msg);
  }
};
