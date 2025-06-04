import LoginForm from "../components/ui/LoginForm";
import HeaderNavBar from "../components/ui/HeaderNavBar";
import LogoHeader from "../assets/imgs/logoTransparentBackgroundMini.svg";
import ListItem from "../components/ui/ListItem";
import CadastrarProdutoForm from "../components/ui/CadastrarProdutoForm";

function Listagem() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div
          id="header"
          className="flex items-center justify-between w-full shadow-md py-4 px-8"
        >
          <div>
            <img className="w-45" src={LogoHeader} alt="Logo" />
          </div>
          <div>
            <HeaderNavBar />
          </div>
          <div>
            <CadastrarProdutoForm />
          </div>
        </div>
        <div
          id="first-div"
          className="grid grid-cols-4 gap-4 ml-auto mt-10 mr-10 max-w-7xl"
        >
          <ListItem
            id="1"
            name="Placa principal evaporadora Ar Condicionado LG S4NQ09WA51C - CSP30256009"
            price="R$ 359,99"
            condition="Novo"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mgoaS5NxJ8__c7IPqzxmqX2Bke18c0viRQ&s"
          />
          <ListItem
            id="2"
            name="Controle Remoto Universal para Ar Condicionado"
            price="R$ 49,90"
            condition="Novo"
            img="https://m.media-amazon.com/images/I/41cM3Q1N5zL._AC_SY450_.jpg"
          />
          <ListItem
            id="3"
            name="Filtro de Ar Split LG Original"
            price="R$ 29,99"
            condition="Novo"
            img="https://a-static.mlcdn.com.br/450x450/filtro-de-ar-condicionado-split-lg-original-2-unidades-para-modelos-9000-a-24000-btus-383eefm1m/multiarclimatizacao/383eefm1m/6f0c1fdf19eb2512e2b9c2a1e6b2f7e3.jpeg"
          />
          <ListItem
            id="4"
            name="Sensor de Temperatura para Ar Condicionado LG"
            price="R$ 19,99"
            condition="Novo"
            img="https://m.media-amazon.com/images/I/61yJw3k8DkL._AC_SL1000_.jpg"
          />
          <ListItem
            id="5"
            name="Placa Eletrônica Universal para Split"
            price="R$ 199,90"
            condition="Usado"
            img="https://images.tcdn.com.br/img/img_prod/746111/placa_eletronica_universal_para_split_electrolux_springer_1047_1_20191101140753.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Listagem;
