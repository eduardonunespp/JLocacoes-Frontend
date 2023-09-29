import { FiHeart } from "react-icons/fi";
import { PiShoppingCartBold } from "react-icons/pi";
import { Button, CadastroModal } from "../../shared/core/components";
import { JlocacoesLogo } from "../../assets";
import * as S from "./header.styles";

const HeaderFeature: React.FC = () => {
  return (
    <S.HeaderContainer>
      <img src={JlocacoesLogo} alt="LogoApp" />
      <S.ContainerButtons>
        <S.ContainerActions>
          <FiHeart />
          <PiShoppingCartBold />
        </S.ContainerActions>
        <CadastroModal />
        <Button>Entrar</Button>
      </S.ContainerButtons>
    </S.HeaderContainer>
  );
};

export default HeaderFeature;
