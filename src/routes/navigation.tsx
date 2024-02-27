import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import Cadastro from "../paginas/Cadastro";
import Home from "../paginas/Home";
import ListaPets from "../paginas/ListaPets";
import Login from "../paginas/Login";
import Mensagem from "../paginas/Mensagem";
import Sobre from "../paginas/Sobre";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Lista de Pets"
        component={ListaPets}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/pets-green.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mensagens"
        component={Mensagem}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/mensagens.png")}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />
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
        <Stack.Screen
          name="Sobre"
          component={Sobre}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
