import React from "react";
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from "react-native"
import styles, { cores } from "../../styles";

export default function ScreenDefault({ children }) {
  return <SafeAreaView style={styles.preencher}>
    <StatusBar backgroundColor={cores.roxo} />
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={styles.preencher}>
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
}