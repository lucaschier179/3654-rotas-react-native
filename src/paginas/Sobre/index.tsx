import { Link } from "@react-navigation/native";
import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, View } from "react-native";
import { RouteProps } from "../../types/routes/TRoute";
import PaginaBase from "../PaginaBase";

interface IRouteSobreParams {
  nome: string;
  imagem: ImageSourcePropType;
  localidade: string;
  descricao: {
    informacoes: string[];
    resumo: string;
    fotos: ImageSourcePropType[]
  };
}

export default function Sobre(props: RouteProps<IRouteSobreParams>) {
  const { nome, imagem, localidade, descricao }: IRouteSobreParams = props.route.params

  return (
    <View style={styles.container}>
      <ScrollView>
        <PaginaBase>
          <View style={styles.contentContainer}>
            <Image source={imagem} style={styles.imagem} />
            <Text style={styles.text}>
              {nome}
            </Text>
            {
              descricao.informacoes.map((item: string, index) =>
                <Text style={styles.textList} key={index}>
                  {item}
                </Text>
              )
            }
            <View style={styles.containerContato}>
              <Text style={styles.local}>
                {localidade}
              </Text>
              <View style={styles.informacoes}>
                <View style={styles.containerInteracoes}>
                  <Image source={require("../../../assets/chat.png")} />
                  <Link
                    to={{
                      screen: "Mensagem",
                      params: {
                        nomePet: nome
                      },
                    }}
                    style={styles.local}
                  >
                    Falar com responsável
                  </Link>
                </View>
                <View style={styles.containerInteracoes}>
                  <Image source={require("../../../assets/share.png")} />
                  <Link
                    to={{
                      screen: "Mensagem",
                      params: {
                        nomePet: nome
                      },
                    }}
                    style={styles.local}
                  >
                    Compartilhar
                  </Link>
                </View>
              </View>
            </View>
            <Text style={styles.textResumo}>
              {descricao.resumo}
            </Text>
            {
              descricao.fotos.map((image: ImageSourcePropType, index) =>
                <Image source={image} key={index} style={styles.image} />
              )
            }
          </View>
        </PaginaBase>
      </ScrollView>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  contentContainer: {
    paddingTop: 150,
    marginHorizontal: 40,
    zIndex: 1,
  },
  text: {
    color: "#3772FF",
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    fontWeight: "bold",
  },
  imagem: {
    alignSelf: "center",
  },
  textList: {
    color: "#737380",
    fontSize: 14,
    lineHeight: 20
  },
  containerInteracoes: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  informacoes: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  local: {
    color: "#737380",
    fontSize: 12,
  },
  containerContato: {
    paddingVertical: 32
  },
  textResumo: {
    color: "#737380",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 24
  }
});
