import React from "react";
import styled from 'styled-components'
import Foto from './Nav/img/Sara.jpeg'

const Titulo = styled.h2`
    color:#FFF;
    font-weight: bolder;
    font-size: xx-large;
`
const Parrafo = styled.p`
    color:#FFF;
    font-weight: bolder;
    font-size: xx-large;
`
const Info = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 200px;
    margin-left:200px;
`
const SelfPhoto = styled.img`
    width:200px;
`

export default function About(){
    return (
        <>
            <div>
                <Titulo>  &#128522;Bienvenido! </Titulo>
            </div>
            
            <Info>
                <SelfPhoto  src={Foto}/>
                <Parrafo>Mi nombre es Sara Mateos y soy de México. Actualmente me dedico a la consultoría ambiental y la decoración de pasteles.
                </Parrafo>
            </Info>
        </>
    )
}