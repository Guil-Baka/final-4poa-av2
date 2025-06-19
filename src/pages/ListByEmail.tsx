import React, { useState } from "react";
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

function ListByEmail() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");

  const [searchTriggered, setSearchTriggered] = useState(false);

  const handleSearch = () => {
    //convert email to lowercase
    const emailLower = email.toLowerCase();

    if (!email) {
      setError("Por favor, insira um email válido.");
      return;
    }
    // check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Por favor, insira um email válido.");
      return;
    }
    // Reset state before fetching
    setLoading(true);
    setError(null);
    setListings([]);
    setSearchTriggered(true);

    fetch(
      `http://localhost:8080/products/by-email?email=${encodeURIComponent(
        emailLower
      )}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Nenhuma listagem encontrada para este email.");
        }
        return response.json();
      })
      .then((data) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const listings: Listing[] = data.map((item: any, index: number) => ({
          id: item.id?.toString() ?? `listing-${index + 1}`,
          name: item.nome,
          price: item.preco,
          description: item.descricao,
          condition: item.condicao,
          img: item.img ?? [],
          phone: item.contato,
          ownerMode: true, // always true for these listings
        }));
        console.log("Listagens recebidas:", listings);
        setListings(listings);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

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
        className="flex flex-col gap-4 flex-1 w-full px-8 py-10 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 120px)" }}
      >
        {/* Email search input */}
        <div className="flex flex-row items-center gap-2 mb-4">
          <input
            type="email"
            placeholder="Digite o email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 flex-1"
          />
          <button
            onClick={handleSearch}
            disabled={!email || loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            Buscar
          </button>
        </div>

        {loading && <div>Carregando listagens...</div>}
        {error && <div className="text-red-600">{error}</div>}
        {!loading && searchTriggered && !error && listings.length === 0 && (
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
      </div>
    </div>
  );
}

export default ListByEmail;
