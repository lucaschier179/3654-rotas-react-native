import { ImageSourcePropType } from "react-native";
import { TRoutesNavigationStack } from "../../Home/TRoutesNavigationStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type TPetsDetailsProps = {
  nome: string;
  idade: number;
  porte: string;
  imagem: ImageSourcePropType;
  caracteristicas: string;
  localidade: string;
  descricao: string;
  navigation: NativeStackNavigationProp<TRoutesNavigationStack>
}
