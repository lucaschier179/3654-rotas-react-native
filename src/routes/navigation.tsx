import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cadastro from "../paginas/Cadastro";
import Home from "../paginas/Home";
import ListaPets from "../paginas/ListaPets";
import Login from "../paginas/Login";
import Mensagem from "../paginas/Mensagem";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ListaPets" component={ListaPets} />
      <Tab.Screen name="Mensagens" component={Mensagem} />
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: "",
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        />
        <Stack.Screen
          name="Tab"
          component={TabRoutes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
