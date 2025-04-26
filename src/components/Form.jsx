// Form.jsx
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";

const Form = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);
    // Aqui você pode adicionar o que deve acontecer quando o formulário for enviado
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <Label text="Email" htmlFor="email" />
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Exemplo@gmail.com"
        />
        <Label text="Senha" htmlFor="senha" />
        <Input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
        />
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Form;
