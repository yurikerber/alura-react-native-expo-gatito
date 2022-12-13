import React from "react";
import { FlatList } from "react-native"
import Item from "./Item";
import ScreenDefault from '../../components/ScreenDefault'


const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Não de banho no seu gato! Mas se precisar nós damos."
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da vacina V4 seu gato precisa de 2"
  },
  {
    id: 3,
    nome: "Vacina Atirrábica",
    preco: 99.9,
    descricao: "Uma dose da vacina Atirrábica. Seu gato precisa de uma por ano."
  }
]

export default function Servicos() {
  return <ScreenDefault>
    <FlatList
      data={servicos}
      removeClippedSubviews={false}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={({ id }) => String(id)}
    />
  </ScreenDefault>
}