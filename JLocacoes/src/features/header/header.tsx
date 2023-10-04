import { FiHeart } from "react-icons/fi";
import { PiShoppingCartBold } from "react-icons/pi";
import { SignUpModal, SignInModal } from "../../shared/core/components";
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
        <SignUpModal />
        <SignInModal />
      </S.ContainerButtons>
    </S.HeaderContainer>
  );
};

export default HeaderFeature;
