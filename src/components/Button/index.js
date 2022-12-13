import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function Button({ pequeno = false, invertido = false, value, action }) {
  const stylesDefault = styles(pequeno, invertido);
  return <TouchableOpacity
    onPress={action}
    style={stylesDefault.botao}
  >
    <Text style={stylesDefault.valor}>{value}</Text>
  </TouchableOpacity>
}