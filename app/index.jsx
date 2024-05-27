
import { StatusBar, Text, View ,StyleSheet,SafeAreaView} from "react-native";

export default function Index() {
  return (
    <>
   
    <View className="bg-neutral-900 flex-1" >
<SafeAreaView className="mt-4"> 
<StatusBar style="light"/>
      <Text className="text-slate-300 text-lg" >Movies App in react Native</Text>
    </SafeAreaView>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"#171717"
  },
})