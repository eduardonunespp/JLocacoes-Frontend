import * as S from './header.styles'
import { JlocacoesLogo }  from '../../assets'

const HeaderFeature: React.FC = () => {
    return(
        <S.HeaderContainer>
            <img src={JlocacoesLogo} alt="LogoApp" />
            <div>
            <button>Cadastre-se</button>
            <button>Entrar</button>
            </div>
        </S.HeaderContainer>
    )
}

export default HeaderFeature