import * as S from "./footer.styles";
import { JlocacoesLogo, CopyrightJLocações } from "../../assets";

export const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.ContainerLogo>
        <img src={JlocacoesLogo} alt="LogoImage" />
      </S.ContainerLogo>
      <S.ContainerInfo>
        <a href="">Sobre Nós</a>
        <a href="">Termos de Uso</a>
        <a href="">Política de Privacidade</a>
        <a href="">Dicas de Segurança</a>
        <a href="">Mapa do Site</a>
        <a href="">Suporte</a>
      </S.ContainerInfo>
      <S.ContainerCopyright>
        <img src={CopyrightJLocações} alt="CopyrightImage" />
      </S.ContainerCopyright>
    </S.FooterContainer>
  );
};

export default Footer;
