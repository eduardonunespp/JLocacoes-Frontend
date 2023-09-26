import * as S from "./header.styles";
import { JlocacoesLogo } from "../../assets";
import { Button } from "../../shared/core/components";

const HeaderFeature: React.FC = () => {
  return (
    <S.HeaderContainer>
      <img src={JlocacoesLogo} alt="LogoApp" />
      <S.ContainerButtons>
        <S.ButtonCadastro>Cadastre-se</S.ButtonCadastro>
        <Button>Entrar</Button>
      </S.ContainerButtons>
    </S.HeaderContainer>
  );
};

export default HeaderFeature;
