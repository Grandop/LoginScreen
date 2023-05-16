import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import * as Animatable from 'react-native-animatable'

export const ContainerView = styled.View`
  flex: 1;
  background-color: #7209b7;
`;

export const ImageBackground = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled(Animatable.View)`
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(150)}px;  
  padding: ${RFValue(10)}px;
  border-color: black;
  border-width: ${RFValue(4)}px;
`;

export const ImageLogo = styled.Image`
  height: ${RFValue(250)}px;
  width: ${RFValue(250)}px;
  border-radius: ${RFValue(150)}px;
`;

export const ContainerForm = styled(Animatable.View)`
  flex: 1;
  background-color: white;
  border-top-right-radius: ${RFValue(25)}px;
  border-top-left-radius: ${RFValue(25)}px;
  padding-left: ${RFValue(5)}%;
  padding-right: ${RFValue(5)}%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  margin-top: ${RFValue(28)}px;
  margin-bottom: ${RFValue(12)}px;
  color: black;
`;

export const SubTitle = styled.Text`
  color: #a1a1a1;
`;

export const AccessButton = styled.TouchableOpacity`
    position: absolute;
    background-color: #7209b7;
    border-radius: ${RFValue(50)}px;
    padding-top: ${RFValue(8)}px;
    padding-bottom: ${RFValue(8)}px;
    width: ${RFValue(60)}%;
    align-self: center;
    justify-content: center;
    align-items: center;
    bottom: ${RFValue(15)}%;
`;

export const ButtonText = styled.Text`
    font-size: ${RFValue(18)}px;
    color: white;
    font-weight: bold;
`;