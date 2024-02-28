import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { TRoutesNavigationStackParams } from "../Home/TRoutesNavigationStack"

export type RouteProps<PARAMS extends any> = {
  navigation: NativeStackNavigationProp<TRoutesNavigationStackParams>
  route: {
    key: string,
    name: string, 
    params: PARAMS, 
    path?: undefined
  }
}
