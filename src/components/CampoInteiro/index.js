import React from 'react';
import { TextInput, View } from 'react-native';
import stylesDefault from './styles';

// import { Container } from './styles';

export default function CampoInteiro({ valor, styles, acao }) {

  const atualiza = (newValue, acaoRetorno) => {
    const verificaInteiro = newValue.match(/^[0-9]*$/)
    if (!verificaInteiro) return;

    const removeZeroEsquerda = newValue.replace(/^(0)(.+)/, '$2')

    acaoRetorno(removeZeroEsquerda);
  }

  const numberString = valor.toString();
  return <TextInput keyboardType='number-pad'
    onChangeText={(newValue) => { atualiza(newValue, acao) }}
    value={numberString}
    selectTextOnFocus
    style={[stylesDefault.campo, styles]}
  />;
}

;