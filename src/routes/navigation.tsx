import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import Cadastro from "../paginas/Cadastro";
import Home from "../paginas/Home";
import ListaPets from "../paginas/ListaPets";
import Login from "../paginas/Login";
import Mensagem from "../paginas/Mensagem";
import Perfil from "../paginas/Perfil";
import Sobre from "../paginas/Sobre";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#35D6AD"
        },
        drawerLabelStyle: {
          color: "#FFFFFF",
          fontSize: 14,
          fontFamily: "PoppinsRegular",
          fontWeight: "400",
          lineHeight: 20
        },
        headerTransparent: true,
        title: ""
      }}>
      <Drawer.Screen
        name="Lista de Pets - Drawer Navigation"
        component={TabRoutes}
        options={{
          drawerIcon: () => (
            <Image
              source={require("../../assets/pets.png")}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{
          drawerIcon: () => (
            <Image
              source={require("../../assets/settings.png")}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={Home}
        options={{
          drawerIcon: () => (
            <Image
              source={require("../../assets/logout.png")}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Lista de Pets - Tab Navigation"
        component={ListaPets}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/pets-green.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
          tabBarLabelStyle: {
            color: "#35D6AD"
          }
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
          name="Drawer"
          component={DrawerRoutes}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
        />
        <Stack.Screen
          name="Mensagem"
          component={Mensagem}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
