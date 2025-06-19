import HeaderNavBar from "../components/ui/HeaderNavBar";
import LogoHeader from "../assets/imgs/logoTransparentBackgroundMini.svg";
// import CadastrarProdutoForm from "../components/ui/CadastrarProdutoForm";
import { Lightbulb, Recycle, HeartHandshake, Earth } from "lucide-react";
// import { Button } from "@paths";

function Home() {
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
          <div className="w-37 h-2">{/* <CadastrarProdutoForm /> */}</div>
        </div>
        <div
          id="first-div"
          className="flex flex-row items-center justify-center w-full m-auto"
        >
          <div className="grid grid-cols-1 grid-rows-1 gap-0 rounded-lg w-xl m-auto h-96 max-h-96 min-h-48 p-2 bg-gray-200 text-center shadow-md border border-gray-300">
            <div className="col-start-1 px-5 pt-5">
              <p className="text-center text-lg font-normal my-auto">
                A ideia por trás do ScrapGear vem da necessidade de muitos na
                nossa sociedade de ter acesso a formas custo-efetivas para
                reparo de seus dipositivos. Visando minimizar o impacto na
                natureza tentamos conectar pessoas que possuem equipamentos já
                usados, estajam estes funcionando ou não. Dessa forma
                conseguimos dar nova utilidade aos equipamentos e seus
                componentes evitando o descarte muitas vezes inadequado de
                eletronicos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 grid-rows-5 gap-2 rounded-lg w-xl m-auto h-96 max-h-96 min-h-48 p-2">
            <div className="col-start-3 bg-[#567070] rounded-lg hover:bg-[#8BB4B4] hover:shadow-lg hover:shadow-[#8BB4B4] transition-shadow flex items-center justify-center">
              <div className="rounded-3xl bg-white p-1">
                <Earth />
              </div>
            </div>
            <div className="col-span-2 row-span-3 col-start-2 row-start-2 bg-white-700 rounded-lg hover:bg-white-600 hover:shadow-lg hover:shadow-gray-700/60 transition-shadow outline-2 outline-[#FFA53C] flex items-center justify-center">
              <div className="rounded-lg w-full h-full flex items-center flex-col justify-center">
                <p className="text-center text-lg font-medium my-auto">
                  Conectando pessoas
                </p>
                <p className="text-center text-lg font-medium my-auto">
                  Reduzindo o descarte de eletronicos.
                </p>
              </div>
            </div>
            <div className="col-start-1 row-start-2 bg-[#FFA53C] rounded-lg hover:bg-[#FF8900] hover:shadow-lg hover:shadow-[#FF8900] transition-shadow flex items-center justify-center">
              <div className="rounded-3xl bg-white p-1">
                <HeartHandshake />
              </div>
            </div>
            <div className="col-start-4 row-start-3 bg-[#FFA53C] rounded-lg hover:bg-[#FF8900] hover:shadow-lg hover:shadow-[#FF8900] transition-shadow flex items-center justify-center">
              <div className="rounded-3xl bg-white p-1">
                <Recycle />
              </div>
            </div>
            <div className="col-start-2 row-start-5 bg-[#567070] rounded-lg hover:bg-[#8BB4B4] hover:shadow-lg hover:shadow-[#8BB4B4] transition-shadow flex items-center justify-center">
              <div className="rounded-3xl bg-white p-1">
                <Lightbulb />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
