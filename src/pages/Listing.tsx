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
          className="flex flex-col gap-4 flex-1 w-full px-8 py-10 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 120px)" }} // adjust as needed for header height
        >
          <ListItem
            id="1"
            name="Placa Principal Evaporadora LG S4NQ09WA51C"
            price="R$ 359,99"
            description="Placa eletrônica original para ar condicionado LG, modelo S4NQ09WA51C (CSP30256009). Nenhum reparo realizado, testada e funcionando perfeitamente. Ideal para reposição em aparelhos LG split."
            condition="Funcionando"
            img={[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mgoaS5NxJ8__c7IPqzxmqX2Bke18c0viRQ&s",
              "https://www.eletrofrigor.com.br/ccstore/v1/images/?source=/file/v2416164962579515570/products/placa-principal-lg-original.jpg",
              "https://img.elo7.com.br/product/zoom/3CB2B74/placa-evaporadora-lg-s4nq09wa51c-csp30256009-ar-condicionado.jpg"
            ]}
            phone="(11) 99999-1234"
          />
          <ListItem
            id="2"
            name="Controle Remoto Universal para Ar Condicionado"
            price="R$ 49,90"
            description="Controle remoto universal compatível com LG, Samsung, Consul, Springer e outras marcas. Alguns botões com desgaste, porém todos funcionam. Acompanha manual de códigos. Baterias não inclusas."
            condition="Funcionando Parcialmente"
            img={[
              "https://m.media-amazon.com/images/I/41cM3Q1N5zL._AC_SY450_.jpg",
              "https://cdn.awsli.com.br/600x1000/26/26305/produto/132803624/controle-remoto-ar-condicionado-universal-kt-n898-1000-func-1e1e1b5b.jpg"
            ]}
            phone="(21) 98888-4567"
          />
          <ListItem
            id="3"
            name="Filtro de Ar Split LG Original (2 Unidades)"
            price="R$ 29,99"
            description="Dois filtros de ar originais para split LG, compatíveis com aparelhos de 9000 a 24000 BTUs. Um deles apresenta pequena rachadura em um canto, mas ambos podem ser usados."
            condition="Quebrado"
            img={[
              "https://a-static.mlcdn.com.br/450x450/filtro-de-ar-condicionado-split-lg-original-2-unidades-para-modelos-9000-a-24000-btus-383eefm1m/multiarclimatizacao/383eefm1m/6f0c1fdf19eb2512e2b9c2a1e6b2f7e3.jpeg",
              "https://http2.mlstatic.com/D_NQ_NP_738437-MLB42966622803_072020-O.jpg"
            ]}
            phone="(31) 97777-7890"
          />
          <ListItem
            id="4"
            name="Sensor de Temperatura para Ar Condicionado LG"
            price="R$ 19,99"
            description="Sensor de temperatura para ar condicionado split LG. Compatível com diversos modelos, em perfeito estado de uso. Pode ser utilizado em instalação ou como reposição."
            condition="Funcionando"
            img={[
              "https://m.media-amazon.com/images/I/61yJw3k8DkL._AC_SL1000_.jpg",
              "https://cdn.dooca.store/920/products/sensor-temperatura-ar-condicionado-lg_640x640+fill_ffffff.jpg?v=1628169187"
            ]}
            phone="(41) 96666-2345"
          />
          <ListItem
            id="5"
            name="Placa Eletrônica Universal para Split"
            price="R$ 199,90"
            description="Placa eletrônica universal para split, compatível com Electrolux, Springer, Elgin, Midea, e outros. Produto testado, acompanha chicote e sensor. Ideal para técnicos e instaladores."
            condition="Funcionando"
            img={[
              "https://images.tcdn.com.br/img/img_prod/746111/placa_eletronica_universal_para_split_electrolux_springer_1047_1_20191101140753.jpg",
              "https://http2.mlstatic.com/D_NQ_NP_900366-MLB32835336765_112019-O.jpg",
              "https://cf.shopee.com.br/file/9f1e1d9e8fb1e2e7e5b0d9c1a1b0d8ed"
            ]}
            phone="(85) 95555-6789"
          />
        </div>
      </div>
    </>
  );
}

export default Listagem;