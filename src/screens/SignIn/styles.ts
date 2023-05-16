import styled, { css } from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import * as Animatable from 'react-native-animatable'

const TextFieldsModifier = {
  errorStyleLabel: () => css`
    color: red;
  `,
  errorStyleTextField: () => css`
    border-bottom-width: ${RFValue(1)}px;
    border-bottom-color: red;
    height: ${RFValue(40)}px;
    margin-bottom: ${RFValue(12)}px;
  `
}

interface ITextFieldsProps {
  hasError: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: #7209b7;
`;

export const ContainerHeader = styled(Animatable.View)`
  margin-top: ${RFValue(14)}%;
  margin-bottom: ${RFValue(8)}%;
  padding-left: ${RFValue(5)}%;
`;

export const MessageLabel = styled.Text`
  font-size: ${RFValue(28)}px;
  font-weight: bold;
  color: #fff;
`;

export const ContainerForm = styled(Animatable.View)`
  background-color: white;
  flex: 1;
  border-top-right-radius: ${RFValue(25)}px;
  border-top-left-radius: ${RFValue(25)}px;
  padding-left: ${RFValue(5)}%;
  padding-right: ${RFValue(5)}%;
`;

export const EmailLabel = styled.Text<ITextFieldsProps>`
  ${({ hasError }) => css`
    font-size: ${RFValue(20)}px;
    margin-top: ${RFValue(28)}px;
    ${hasError && TextFieldsModifier.errorStyleLabel()}
  `}
`;

export const EmailTextField = styled.TextInput<ITextFieldsProps>`
  ${({ hasError }) => css`
    border-bottom-width: ${RFValue(1)}px;
    height: ${RFValue(40)}px;
    margin-bottom: ${RFValue(12)}px;
    ${hasError && TextFieldsModifier.errorStyleTextField()}
  `}
`;

export const PasswordLabel = styled.Text<ITextFieldsProps>`
  ${({ hasError }) => css`
    font-size: ${RFValue(20)}px;
    margin-top: ${RFValue(28)}px;
    ${hasError && TextFieldsModifier.errorStyleLabel()}
  `}
`;

export const PasswordTextField = styled.TextInput<ITextFieldsProps>`
  ${({ hasError }) => css`
    border-bottom-width: ${RFValue(1)}px;
    height: ${RFValue(40)}px;
    margin-bottom: ${RFValue(12)}px;
    ${hasError && TextFieldsModifier.errorStyleTextField()}
  `}
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #7209b7;
  border-radius: ${RFValue(5)}px;
  padding-top: ${RFValue(8)}px;
  padding-bottom: ${RFValue(8)}px;
  margin-top: ${RFValue(14)}px;
  justify-content: center;
  align-items: center;
`;

export const TextLoginButton = styled.Text`
  color: white;
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;

export const RegisterButton = styled.TouchableOpacity`
  margin-top: ${RFValue(14)}px;
  align-self: center;
`;

export const TextRegisterButton = styled.Text`
  color: #a1a1a1;
`;