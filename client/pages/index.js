import Layout from "../components/Layout.js";
import { Button, ButtonOr, ButtonGroup } from "semantic-ui-react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>Здесь вы можете посмотреть контакты по адресу или оставить свои</h1>
      <ButtonGroup>
        <Button primary onClick={() => router.push("/show")}>
          Посмотреть
        </Button>
        <ButtonOr text="||" />
        <Button positive onClick={() => router.push("/add")}>
          Записать
        </Button>
      </ButtonGroup>
    </Layout>
  );
};

export default Index;
