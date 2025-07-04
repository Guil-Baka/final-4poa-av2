import React, { useEffect, useState } from "react";
import HeaderNavBar from "../components/ui/HeaderNavBar";
import LogoHeader from "../assets/imgs/logoTransparentBackgroundMini.svg";
import ListItem from "../components/ui/ListItem";
import CadastrarProdutoForm from "../components/ui/CadastrarProdutoForm";

type Condition = "Funcionando" | "Funcionando Parcialmente" | "Quebrado";

type Listing = {
  id: string;
  name: string;
  price: string;
  description: string;
  condition: Condition;
  img: string[];
  phone: string;
};

function Listagem() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Replace with your actual backend endpoint
    fetch("http://localhost:8080/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar listagens");
        }
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("RAW API DATA:", data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const listings: Listing[] = data.map((item: any, index: number) => ({
          id: item.id?.toString() ?? `listing-${index + 1}`,
          name: item.nome, // <-- changed
          price: item.preco, // <-- changed
          description: item.descricao, // <-- changed
          condition: item.condicao, // <-- changed
          img: item.img ?? [], // <-- check if present, fallback to empty array
          phone: item.contato, // <-- changed
        }));

        setListings(listings);
        setLoading(false);

        // console.log("Listagens recebidas:", listings);
        // console.log("Total de listagens:", listings.length);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
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
        style={{ maxHeight: "calc(100vh - 120px)" }}
      >
        {loading && <div>Carregando listagens...</div>}
        {error && <div className="text-red-600">{error}</div>}
        {!loading && !error && listings.length === 0 && (
          <div>Nenhuma listagem encontrada.</div>
        )}

        {listings.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            condition={item.condition}
            img={item.img}
            phone={item.phone}
          />
        ))}
        {listings.length > 0 && (
          <div className="text-center text-gray-500 mt-4">
            Total de {listings.length} listagens encontradas.
          </div>
        )}
        {/* <ListItem
          name="Teste"
          price="R$ 100"
          description="Descrição de teste"
          condition="Funcionando"
          img={["https://via.placeholder.com/150"]}
          phone="(11) 99999-9999"
        /> */}
      </div>
    </div>
  );
}

export default Listagem;
