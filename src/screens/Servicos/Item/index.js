import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native"
import styles from './styles';
import CampoInteiro from '../../../components/CampoInteiro';
import Button from "../../../components/Button"

export default function Item({ nome, preco, descricao }) {
  const [qtde, setQtde] = useState(1);
  const [total, setTotal] = useState(preco);
  const [expand, setExpand] = useState(false);

  const atualizaValorTotal = (newQtde) => {
    setQtde(newQtde);
    calcTotal(newQtde);
  }

  const calcTotal = (qtde) => {
    setTotal(qtde * preco);
  }

  const invertExpand = () => {
    setExpand(!expand);
    atualizaValorTotal(1);
  }

  return (
    <>
      <TouchableOpacity style={styles.informacao} onPress={invertExpand}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.preco}>{Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(preco)}</Text>
      </TouchableOpacity>
      {expand && <View style={styles.carrinho}>
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
        <Button value='Adicionar ao Carrinho' action={() => { }} />
      </View>
      }
      <View style={styles.divisor}></View>
    </>
  )
}