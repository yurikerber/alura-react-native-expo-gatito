import React, { useState } from 'react';
import { Text, View } from "react-native"
import styles from './styles';
import CampoInteiro from '../../../components/CampoInteiro';
import Button from "../../../components/Button"

export default function Item({ nome, preco, descricao, quantidade: qtdeInitial }) {
  const [qtde, setQtde] = useState(qtdeInitial);
  const [total, setTotal] = useState(preco * qtdeInitial);

  const atualizaValorTotal = (newQtde) => {
    setQtde(newQtde);
    calcTotal(newQtde);
  }

  const calcTotal = (qtde) => {
    setTotal(qtde * preco);
  }


  return (
    <>
      <View style={styles.informacao}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.preco}>{Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(preco)}</Text>
      </View>
      <View style={styles.carrinho}>
        <View>
          <View style={styles.valor}>
            <Text style={styles.descricao}>Quantidade:</Text>
            <CampoInteiro styles={styles.quantidade} valor={qtde} acao={atualizaValorTotal} />
          </View>
          <View style={styles.valor}>
            <Text style={styles.descricao}>Total:</Text>
            <Text style={styles.preco}>{Intl.NumberFormat('pt-BR', {
              style: 'currency', currency: 'BRL'
            }).format(total)}</Text>
          </View>
        </View>
        <Button value='Remover do Carrinho' action={() => { }} />
      </View>
      <View style={styles.divisor}></View>
    </>
  )
}