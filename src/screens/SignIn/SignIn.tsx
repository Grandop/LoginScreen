import React, { useState } from "react";
import * as S from './styles'
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import Loader from "../../components/Loader/Loader"
import { View } from "react-native-animatable";


export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const alert = Alert.alert

  const textFieldsValidation = () => {
    const errorMessage = 'Por favor, preencha todos os campos.'
    setEmailError(email === '')
    setPasswordError(password === '')
    setLoading(false)

    if (email && password) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        alert('Dados enviados')
        setEmail('')
        setPassword('')
      }, 2000)
    } else {
      alert(errorMessage)
      setLoading(false)
    }
  } 

  return(
    <TouchableWithoutFeedback
    onPress={dismissKeyboard}
    >
      <S.Container >
        <S.ContainerHeader animation='fadeInLeft' delay={500}>
          <S.MessageLabel>Bem-vindo(a)</S.MessageLabel>
        </S.ContainerHeader>

        <S.ContainerForm animation="fadeInUp" delay={200}>

          <S.EmailLabel
          hasError={emailError}
          >Email</S.EmailLabel>
          <S.EmailTextField
          hasError={emailError} 
          value={email}
          placeholder="Digite seu email" 
          onChangeText={setEmail}
          ></S.EmailTextField>

          <S.PasswordLabel
          hasError={passwordError}
          >Senha</S.PasswordLabel>
          <S.PasswordTextField 
          secureTextEntry={true} 
          placeholder="Digite sua senha"
          value={password}
          hasError={passwordError}
          onChangeText={setPassword}
          ></S.PasswordTextField>
      
          <S.LoginButton
          onPress={textFieldsValidation}
          >
            <S.TextLoginButton>Login</S.TextLoginButton>
          </S.LoginButton>

          <S.RegisterButton>
            <S.TextRegisterButton>Não possui conta? Cadastre-se</S.TextRegisterButton>
          </S.RegisterButton>

        </S.ContainerForm>

        {isLoading && (
            <View style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: '#000',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Loader />
            </View>
          )}

      </S.Container>
    </TouchableWithoutFeedback>
  );
}