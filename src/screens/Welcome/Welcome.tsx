import React from "react";
import * as S from './styles';
import vortLogo from '../../assets/vortLogo.png'
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  return(
    <S.ContainerView>

    <S.ImageBackground> 
      <S.ImageContainer animation="flipInY">
        <S.ImageLogo 
        source={vortLogo}
        resizeMode="contain"
        /> 
      </S.ImageContainer>
    </S.ImageBackground> 

    <S.ContainerForm delay={700} animation="fadeInUp">

    <S.Title>Registre ou Monitore horas de qualquer lugar!</S.Title>
    <S.SubTitle>Faça o login para começar</S.SubTitle>

    <S.AccessButton
    onPress={() => navigation.navigate('SignIn')}
    >
      <S.ButtonText>Acessar</S.ButtonText>
    </S.AccessButton>

    </S.ContainerForm>

    </S.ContainerView>
  );
}