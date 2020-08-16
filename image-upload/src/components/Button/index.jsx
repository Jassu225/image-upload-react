import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  border-radius: 6px;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.blueGreen};
  color: ${({ theme }) => theme.colors.paleGreen};
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.05rem;
  cursor: pointer;
  display: inline-block;
`;

const Button = ({ label, onClick, className }) => {
  return (
    <ButtonContainer className={className || ''} onClick={onClick}>{label}</ButtonContainer>
  );
};

export default Button;