import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import History from "./screens/history";
import NewsDetail from "./screens/news-detail";
import SuccessPopup from "./screens/SuccessPopup";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (

    

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "History":
              iconName = "list-outline";
              break;
            case "Confirm":
              iconName = "document-text-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="History" component={History} options={noHead} />
      <Tab.Screen name="Confirm" component={SuccessPopup} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen
            name="News Detail"
            component={NewsDetail}
            options={noHead}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
