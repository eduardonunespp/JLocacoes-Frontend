import { Header, Footer } from "../../features/";
import { FaConnectdevelop } from "react-icons/fa";
import * as S from "./home-page.styles";
import { AiOutlineSearch } from "react-icons/ai";
import { Button, Input } from "../../shared/core";
import { BiSolidStar } from "react-icons/bi";
import { BackImageProduct } from "../../assets";

const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />

      <S.BlockMock>
        <h2>Encontre o veículo perfeito para você</h2>

        <p>Explore uma ampla seleção de veículos para alugar</p>

        <S.ContainerInput>
          <Input
            id=""
            type="text"
            placeholder="Pesquise por marcas e modelos"
          />

          <AiOutlineSearch />
        </S.ContainerInput>

        <S.SearchContainerP>
          <S.SearchContainer>
          <AiOutlineSearch /> <span>Palio</span>
          </S.SearchContainer>

          <S.SearchContainer>
          <AiOutlineSearch /> <span>Palio</span>
          </S.SearchContainer>

          <S.SearchContainer>
          <AiOutlineSearch /> <span>Palio</span>
          </S.SearchContainer>
        </S.SearchContainerP>
      </S.BlockMock>

      <S.ContainerTitle>
      <h2>Em Destaque</h2>

      </S.ContainerTitle>


      <S.ContainerBlocks>
        <S.Card>
          <S.BackPhoto>
            <img src={BackImageProduct} alt="" />
          </S.BackPhoto>

          <h3>Headline do Card</h3>

          <p>
            <span>R$ 400,00</span>/Dia
          </p>

          <p>
            Aqui fica é a descrição do card. Limitar a 3 linhas no máximo. Lorem
            ipsum dolor sit amet consectur set...
          </p>

          <S.FooterCard>
            <S.ContainerStates>
              <p>4.0</p>
              <BiSolidStar />
              <BiSolidStar />
            </S.ContainerStates>

            <Button>Alugar</Button>
          </S.FooterCard>
        </S.Card>

        <S.Card>
          <S.BackPhoto>
            <img src={BackImageProduct} alt="" />
          </S.BackPhoto>

          <h3>Headline do Card</h3>

          <p>
            <span>R$ 400,00</span>/Dia
          </p>

          <p>
            Aqui fica é a descrição do card. Limitar a 3 linhas no máximo. Lorem
            ipsum dolor sit amet consectur set...
          </p>

          <S.FooterCard>
            <S.ContainerStates>
              <p>4.0</p>
              <BiSolidStar />
              <BiSolidStar />
            </S.ContainerStates>

            <Button>Alugar</Button>
          </S.FooterCard>
        </S.Card>

        <S.Card>
          <S.BackPhoto>
            <img src={BackImageProduct} alt="" />
          </S.BackPhoto>

          <h3>Headline do Card</h3>

          <p>
            <span>R$ 400,00</span>/Dia
          </p>

          <p>
            Aqui fica é a descrição do card. Limitar a 3 linhas no máximo. Lorem
            ipsum dolor sit amet consectur set...
          </p>

          <S.FooterCard>
            <S.ContainerStates>
              <p>4.0</p>
              <BiSolidStar />
              <BiSolidStar />
            </S.ContainerStates>

            <Button>Alugar</Button>
          </S.FooterCard>
        </S.Card>

        <S.Card>
          <S.BackPhoto>
            <img src={BackImageProduct} alt="" />
          </S.BackPhoto>

          <h3>Headline do Card</h3>

          <p>
            <span>R$ 400,00</span>/Dia
          </p>

          <p>
            Aqui fica é a descrição do card. Limitar a 3 linhas no máximo. Lorem
            ipsum dolor sit amet consectur set...
          </p>

          <S.FooterCard>
            <S.ContainerStates>
              <p>4.0</p>
              <BiSolidStar />
              <BiSolidStar />
            </S.ContainerStates>

            <Button>Alugar</Button>
          </S.FooterCard>
        </S.Card>

        <S.Card>
          <S.BackPhoto>
            <img src={BackImageProduct} alt="" />
          </S.BackPhoto>

          <h3>Headline do Card</h3>

          <p>
            <span>R$ 400,00</span>/Dia
          </p>

          <p>
            Aqui fica é a descrição do card. Limitar a 3 linhas no máximo. Lorem
            ipsum dolor sit amet consectur set...
          </p>

          <S.FooterCard>
            <S.ContainerStates>
              <p>4.0</p>
              <BiSolidStar />
              <BiSolidStar />
            </S.ContainerStates>

            <Button>Alugar</Button>
          </S.FooterCard>
        </S.Card>

      </S.ContainerBlocks>

      <Footer />

      <S.ContainerStatus>
        <p className="statusApp">under development</p>

        <FaConnectdevelop />
      </S.ContainerStatus>
    </S.Container>
  );
};

export default Home;
