import { StatusBar } from "expo-status-bar";
import { Background } from "./src/components/Background";
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";
export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
  });

  return (
    <Background>
      <StatusBar 
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      {fontsLoaded?<Home/>:<Loading/>}
    </Background>
  );
}
