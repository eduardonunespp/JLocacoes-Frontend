import * as S from "./header.styles";
import { JlocacoesLogo } from "../../assets";
import { Button, CadastroModal } from "../../shared/core/components";

const HeaderFeature: React.FC = () => {
  return (
    <S.HeaderContainer>
      <img src={JlocacoesLogo} alt="LogoApp" />
      <S.ContainerButtons>
        <CadastroModal />
        <Button>Entrar</Button>
      </S.ContainerButtons>
    </S.HeaderContainer>
  );
};

export default HeaderFeature;
