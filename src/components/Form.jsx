import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";
import LoginContainer from "./LoginContainer";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://54.232.249.80:8080/login?useCookies=true", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Erro ao realizar login.");
      }

      // Redireciona ao dashboard após sucesso
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Erro:", error);
      setErrorMsg("Email ou senha inválidos.");
    }
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <Label text="Email" htmlFor="email" />
          <Input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Exemplo@gmail.com"
          />
        </div>

        <div className="mb-6">
          <Label text="Senha" htmlFor="password" />
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
        </div>

        {errorMsg && <p className="text-red-600 mb-4">{errorMsg}</p>}

        <Button type="submit" className="w-full mt-4">
          Login
        </Button>
      </form>
    </LoginContainer>
  );
};

export default Form;
