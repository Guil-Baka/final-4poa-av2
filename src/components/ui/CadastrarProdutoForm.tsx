import { useState, type FormEvent, type ChangeEvent } from "react";
import { Button } from "./button";
import { Input } from "./input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const DESCRICAO_MAX = 256;

export default function CadastrarProdutoForm() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagens, setImagens] = useState<File[]>([]);
  const [contato, setContato] = useState("");
  const [email, setEmail] = useState("");
  const [categoria, setCategoria] = useState<"Doação" | "Venda">("Doação");
  const [preco, setPreco] = useState("");
  const [condicao, setCondicao] = useState<"Quebrado" | "Funcionando" | "Funcionando Parcialmente">("Funcionando");

  const handleImagensChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length > 5) {
      setImagens(files.slice(0, 5));
    } else {
      setImagens(files);
    }
  };

  const handleDescricaoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= DESCRICAO_MAX) {
      setDescricao(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("descricao", descricao);
    formData.append("contato", contato);
    formData.append("email", email);
    formData.append("categoria", categoria);
    formData.append("condicao", condicao);
    if (categoria === "Venda") {
      formData.append("preco", preco);
    }
    imagens.forEach((img) => {
      formData.append("imagens", img); // Use "imagens[]" if your backend expects an array
    });
  
    try {
      const response = await fetch("YOUR_POST_URL_HERE", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        alert("Erro ao enviar o produto!");
        return;
      }
      alert("Produto cadastrado com sucesso!");
      // Optionally, reset the form state here
      // setNome(""); setDescricao(""); setContato(""); setEmail(""); setCategoria("Doação");
      // setCondicao("Funcionando"); setPreco(""); setImagens([]);
    } catch (err) {
      alert("Erro de rede ao enviar o produto!");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Cadastrar Produto</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar Produto</DialogTitle>
          <DialogDescription>
            Preencha as informações do produto para anunciar.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Nome do Produto</label>
            <Input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <label htmlFor="descricao">Descrição</label>
            <div className="relative">
              <Input
                id="descricao"
                type="text"
                value={descricao}
                onChange={handleDescricaoChange}
                maxLength={DESCRICAO_MAX}
                required
              />
              <span
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500"
                aria-live="polite"
              >
                {descricao.length}/{DESCRICAO_MAX}
              </span>
            </div>

            <label htmlFor="categoria">Categoria</label>
            <div className="flex gap-4 items-center mb-2">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="categoria"
                  value="Doação"
                  checked={categoria === "Doação"}
                  onChange={() => setCategoria("Doação")}
                />
                Doação
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="categoria"
                  value="Venda"
                  checked={categoria === "Venda"}
                  onChange={() => setCategoria("Venda")}
                />
                Venda
              </label>
            </div>

            {categoria === "Venda" && (
              <>
                <label htmlFor="preco">Preço</label>
                <Input
                  id="preco"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Digite o valor"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  required={categoria === "Venda"}
                />
              </>
            )}

            {/* Condição do Produto */}
            <label htmlFor="condicao">Condição do Produto</label>
            <div className="flex gap-4 items-center mb-2">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="condicao"
                  value="Quebrado"
                  checked={condicao === "Quebrado"}
                  onChange={() => setCondicao("Quebrado")}
                />
                Quebrado
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="condicao"
                  value="Funcionando"
                  checked={condicao === "Funcionando"}
                  onChange={() => setCondicao("Funcionando")}
                />
                Funcionando
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="condicao"
                  value="Funcionando Parcialmente"
                  checked={condicao === "Funcionando Parcialmente"}
                  onChange={() => setCondicao("Funcionando Parcialmente")}
                />
                Funcionando Parcialmente
              </label>
            </div>

            <label htmlFor="imagens">Fotos do Produto (até 5 imagens)</label>
            <Input
              id="imagens"
              type="file"
              multiple
              accept="image/*"
              onChange={handleImagensChange}
              required={imagens.length === 0}
            />
            {imagens.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {imagens.map((img, idx) => (
                  <span key={idx} className="text-xs">
                    {img.name}
                  </span>
                ))}
              </div>
            )}

            <label htmlFor="contato">Contato (Telefone ou WhatsApp)</label>
            <Input
              id="contato"
              type="text"
              value={contato}
              onChange={(e) => setContato(e.target.value)}
              required
            />

            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2 mt-8 ">
            <Button
              type="submit"
              className="text-black bg-pers-secondary hover:bg-pers-primary"
            >
              Anunciar Produto
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}