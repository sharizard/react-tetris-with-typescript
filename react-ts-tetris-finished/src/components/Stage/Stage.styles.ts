import styled from 'styled-components';
import { STAGE_WIDTH, STAGE_HEIGHT } from '../../setup';

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 60px);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 60px);
  grid-gap: 3px;
  border: 1px solid #1E272E;
  background: #182126;
`;
