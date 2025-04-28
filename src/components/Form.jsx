import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";
import LoginContainer from "./LoginContainer";

const Form = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <Label text="Email" htmlFor="email" />
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Exemplo@gmail.com"
          />
        </div>

        <div className="mb-6">
          <Label text="Senha" htmlFor="senha" />
          <Input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
          />
        </div>

        <Button type="submit" className="w-full mt-4">Login</Button>
      </form>
    </LoginContainer>
  );
};

export default Form;
