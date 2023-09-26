import * as S from './header.styles'
import { JLocacoesLogo } from '../../assets'

const HeaderFeature: React.FC = () => {
    return(
        <S.HeaderContainer>
            <JLocacoesLogo />
            <div>
            <button>Cadastre-se</button>
            <button>Entrar</button>
            </div>
        </S.HeaderContainer>
    )
}

export default HeaderFeature