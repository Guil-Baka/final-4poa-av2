import { useState, type FormEvent, type ChangeEvent } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Senha: ", password);
  };

// Suggested code may be subject to a license. Learn more: ~LicenseLog:2424261690.
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            type={"email"}
            placeholder={"Email"}
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type={"password"}
            placeholder={"Senha"}
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            variant={"outline"}
            size={"lg"}
            type={"submit"}
          >
            Teste
          </Button>
        </form>
      </div>
    </>
  );
}

export default App;
