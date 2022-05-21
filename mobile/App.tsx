import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Widget } from "./src/components";
import { theme } from "./src/theme";

import AppLoading from "expo-app-loading";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

const SplashScreen = AppLoading as any;

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) return <SplashScreen />;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Widget />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </View>
  );
}
