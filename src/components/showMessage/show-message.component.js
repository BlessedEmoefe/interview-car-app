import { WSnackBar, WModal } from "react-native-smart-tip";
import { Alert } from "react-native";

const types = {
  ERROR: {
    textColor: "#fff",
    backgroundColor: "#bf0002",
    actionText: null,
    actionTextColor: "#bf0002",
    position: WSnackBar.position.BOTTOM,
  },
  DONE: {
    textColor: "#fff",
    backgroundColor: "#101E60",
    actionText: null,
    actionTextColor: "#bf0002",
    position: WSnackBar.position.BOTTOM,
  },
  ALERT: {
    textColor: "#000",
    backgroundColor: "#fff",
    actionText: "Show",
    actionTextColor: "#bf0002",
    position: WSnackBar.position.BOTTOM,
  },
};

const ShowMessage = (type, message, url) => {
  const snackBarOpts = {
    data:
      // message.includes('Variable "$')
      //   ? 'Error processing request please try again'
      //   :
      message,
    position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
    duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
    ...types[type],
    numberOfLines: 3,
    onActionHide: () => {
      // Click Action
      Alert.alert(`To redirect to ${url} !`);
    },
  };
  WSnackBar.show(snackBarOpts);
};

export const type = {
  ERROR: "ERROR",
  DONE: "DONE",
  ALERT: "ALERT",
};

export default ShowMessage;
