import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.div`
  display: inline-flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blueGreen};
`;

const Image = styled.img`
  max-width: 50%;
`;

const RoundedIcon = ({ onClick, className, size, imgSrc }) => {
  return (
    <Icon onClick={onClick} className={className} $size={size}>
      <Image src={imgSrc} />
    </Icon>
  );
};

RoundedIcon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired
};

RoundedIcon.defaultProps = {
  onClick: () => {},
  className: ''
};

export default RoundedIcon;
