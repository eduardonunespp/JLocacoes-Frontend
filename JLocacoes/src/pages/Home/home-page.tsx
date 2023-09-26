import { Header } from "../../features/";
import * as S from './home-page.styles'

const Home: React.FC = () => {
  return (
    <S.Container>

      <Header />

      <p className='statusApp' >under development</p>
    </S.Container>
  )
};

export default Home;
