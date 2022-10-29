import * as S from "./Main.style";

export const Main: React.FC<React.PropsWithChildren> = (props) => (
  <S.MainContainer>{props.children}</S.MainContainer>
);
