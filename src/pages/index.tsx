import Head from "next/head";
import Image from "next/image";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { Container, Content } from "../styles/pages/home.style";

export default function Home() {
  return (
    <Container>
      <Content>
        <Input name="name" />
        <Button title="Create" />
      </Content>
    </Container>
  );
}
