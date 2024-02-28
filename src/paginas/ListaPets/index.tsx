import { FlatList, StyleSheet, Text, View } from "react-native";
import { pets } from "../../mocks/pets";
import { RouteProps } from "../../types/routes/TRoute";
import PaginaBase from "../PaginaBase";
import Card from "./Card";

export default function ListaPets({ navigation, route }: RouteProps<undefined>) {
  return (
    <View style={styles.container}>
      <PaginaBase>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>
            Olá! Veja os amigos disponíveis para adoção!
          </Text>
          <FlatList
            data={pets}
            renderItem={({ item }) => <Card {...item} key={route.key} navigation={navigation} />}
          >
          </FlatList>
        </View>
      </PaginaBase>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  contentContainer: {
    gap: 32,
    paddingTop: 160,
    zIndex: 1,
  },
  text: {
    color: "#3772FF",
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    fontWeight: '400',
    marginHorizontal: 67
  },
});
