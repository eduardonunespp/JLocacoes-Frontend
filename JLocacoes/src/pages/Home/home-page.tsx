import { Header } from "../../features/";
import { FaConnectdevelop } from "react-icons/fa";
import * as S from "./home-page.styles";

const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />

      <S.BlockMock />

      <S.ContainerBlocks>
        <S.Block />
        <S.Block />
        <S.Block />
        <S.Block />
        <S.Block />
        <S.Block />
        <S.Block />
        <S.Block />
      </S.ContainerBlocks>

      <S.ContainerStatus>
        <p className="statusApp">under development</p>

        <FaConnectdevelop />
      </S.ContainerStatus>
    </S.Container>
  );
};

export default Home;
