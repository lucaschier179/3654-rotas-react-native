import { ImageSourcePropType } from "react-native";

export type TRoutesNavigationStack = {
  Home: object | undefined;
  Login: object | undefined;
  Cadastro: object | undefined;
  ListaPets: object | undefined;
  Tab: object | undefined;
  Sobre: {
    nome: string;
    imagem: ImageSourcePropType;
    localidade: string;
    descricao: string;
  } | undefined;
}
