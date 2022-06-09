import React from "react";

import { GetServerSideProps } from "next";

import { api } from "../../services/axios";
import { Container, Content, Name } from "./styles";
import { Button } from "../../components/Button";
import { useRouter } from "next/router";

export default function AccountDetail({ account }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <strong>ok</strong>;
  }

  return (
    <Container>
      <Content>
        this page is for
        <Name>{account.name}</Name>
        <Button title="Share" kind="share" />
        <Button title="Send Notification" kind="notification" />
      </Content>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (data) => {
  const { account } = data.params;

  const { data: registeredAccount } = await api.get(`/account`, {
    params: {
      name: account,
    },
  });

  return {
    props: {
      account: registeredAccount.account,
    },
  };
};
