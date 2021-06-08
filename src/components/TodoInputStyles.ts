import styled from 'styled-components/native';

export const Container = styled.View `
  background-color: ${({theme}) => theme.colors.default}; 
  border-radius: 5px; 
  margin-top: -25px;  
  margin-left: 40px; 
  margin-right: 40px; 
  height: 50px;  
  flex-direction: row;  
  align-items: center; 
  justify-content: center ;
`;

export const Input = styled.TextInput `
    flex: 1;
    color: ${({theme}) => theme.colors.text_shape};
    background-color: ${({theme}) => theme.colors.default};
    padding-left: 12px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;
export const Button = styled.TouchableOpacity `
    background-color: ${({theme}) => theme.colors.success};
    height: 50px;
    padding-left: 16px;
    padding-right: 16px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;
 