import { ImageSourcePropType } from "react-native";

export type TRoutesNavigationStackParams = {
  Home: object | undefined;
  Login: object | undefined;
  Cadastro: object | undefined;
  ListaPets: object | undefined;
  Tab: object | undefined;
  Sobre: TParamsSobreProps | undefined;
  Mensagem: object | undefined;
}

export type TParamsSobreProps = {
  nome: string;
  imagem: ImageSourcePropType;
  localidade: string;
  descricao: {
    informacoes: string[];
    resumo: string;
    fotos: ImageSourcePropType[]
  };
}
