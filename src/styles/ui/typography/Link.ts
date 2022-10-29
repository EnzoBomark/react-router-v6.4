import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import { Regular, IRegular } from "./Default";

interface Props extends IRegular {}

export const Link = styled(ReactLink)<Props>`
  font-size: 1.4rem;
  ${Regular}
`;
