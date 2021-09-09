import styled from 'styled-components';
import { TETROMINOS } from '../../setup';

type Props = {
  type: keyof typeof TETROMINOS;
  color: string;
};

export const StyledCell = styled.div<Props>`
  width: auto;
  background: rgba(${props => props.color}, 1);
  border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: rgba(${props => props.color}, 0);
  border-right-color: rgba(${props => props.color}, 0);
  border-top-color: rgba(${props => props.color}, 0);
  border-left-color: rgba(${props => props.color}, 0);
`;
