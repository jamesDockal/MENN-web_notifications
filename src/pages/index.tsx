import { FormEvent, useState } from "react";


import Router from 'next/router'


import { Container, Content } from "../styles/pages/home.style";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { api } from "../services/axios";

export default function Home() {
  const [name, setName] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { data } = await api.post("/names", {
      name,
    });

    Router.push(`/${name}`)


    
  };

  return (
    <Container>
      <Content onSubmit={onSubmit}>
        <Input name="name" onChange={(e) => setName(e.target.value)} required />
        <Button title="Create" type="submit" />
      </Content>
    </Container>
  );
}
