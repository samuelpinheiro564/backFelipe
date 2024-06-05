import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "../screens/Login";
import Home from "../screens/Home"

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
