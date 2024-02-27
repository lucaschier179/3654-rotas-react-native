import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ImageSourcePropType } from "react-native";
import { TRoutesNavigationStackParams } from "../Home/TRoutesNavigationStack";

export type TListaPetsParams = {
  nome: string;
  idade: string;
  porte: string;
  imagem: ImageSourcePropType;
  caracteristicas: string;
  localidade: string;
  descricao: {
    informacoes: string[];
    resumo: string;
    fotos: ImageSourcePropType[]
  };
  navigation: NativeStackNavigationProp<TRoutesNavigationStackParams>
}
