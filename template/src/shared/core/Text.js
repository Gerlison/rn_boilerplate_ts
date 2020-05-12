import React from 'react';
import styled from 'styled-components/native';

import { sizing, styling } from '@styles/fonts';

const Text = ({ children, type, ...props }) => {
  const renderComponent = (style = {}) => (
    <StyledText {...style} {...props}>
      {children}
    </StyledText>
  );

  switch (type) {
    case 'label':
      return renderComponent({
        size: 'SMALL',
        color: 'DARK',
        weight: 'ROBOTO_LIGHT',
      });
    case 'title':
      return renderComponent({
        color: 'DARKEST',
        weight: 'ROBOTO_REGULAR',
        size: 'LARGE',
      });

    default:
      return renderComponent();
  }
};

const StyledText = styled.Text`
  color: ${({ theme, color }) => theme[color || 'DARKEST']};
  font-family: ${({ weight }) => styling[weight || 'ROBOTO_LIGHT']};
  font-size: ${({ size }) =>
    (typeof size === 'string' ? sizing[size] : size) || sizing.MEDIUM}px;
`;

export default Text;
