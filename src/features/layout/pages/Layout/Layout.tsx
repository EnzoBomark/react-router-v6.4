import * as S from "./Layout.style";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";

export const Layout: React.FC<React.PropsWithChildren> = (props) => (
  <S.LayoutContainer>
    <Header />
    <Main>{props.children}</Main>
    <Footer />
  </S.LayoutContainer>
);
