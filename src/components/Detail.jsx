import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import goBack from './Nav/img/goBack.png'
import styled from "styled-components";

const Icono2 = styled.img`
    width:30px;
    margin: 20px;
`
const Enlaces = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
   
`

const Nombre = styled.h1`
    font-size:300%;
    color: #FFF;
    font-weight: bolder;
`
const Caracteristicas = styled.p`
    font-size:large;
    color: #FFF;
    font-weight: bolder;
`
const Personaje = styled.img`
    border-radius: 10px;
    
`

export default function Detail (){
    const { detailId } = useParams()
    const [character, setCharacter]=useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return (
      
        <div>
            <Enlaces>
            
            <Link className='a'to='/home'><Icono2 src={goBack} />Go home</Link>
            </Enlaces>      
            <Nombre>{character?.name}</Nombre>
            <Caracteristicas>Status: {character?.status}</Caracteristicas>
            <Caracteristicas>Species: {character?.species}</Caracteristicas>
            <Caracteristicas>Gender: {character?.gender}</Caracteristicas>
            <Caracteristicas>Name: {character?.origin?.name}</Caracteristicas>
            <Personaje src={character?.image} alt=""/>
            
        </div>

    )
}