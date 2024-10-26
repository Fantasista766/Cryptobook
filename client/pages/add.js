import Layout from "../components/Layout.js";
import {
  Form,
  FormField,
  FormGroup,
  Input,
  Button,
  Message,
} from "semantic-ui-react";
import { useState } from "react";
import provider from "../provider";
import contactFactory from "../contactFactory";

const AddContact = () => {
  const [telegram, setTelegram] = useState();
  const [discord, setDiscord] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    if (!telegram) {
      setErrorMessage("Ну хоть телеграмм то заполни...");
    }
    const signer = await provider.getSigner();
    const contactFactoryWithSigner = contactFactory.connect(signer);
    try {
      let response;
      if (discord) {
        response = await contactFactoryWithSigner[
          "createContact(string,string)"
        ](telegram, discord);
      } else {
        response = await contactFactoryWithSigner["createContact(string)"](
          telegram
        );
        console.log("createContact(string)");
      }
      console.log(response);
      setSuccessMessage("Хеш транзакции такой: " + response.hash);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <Layout>
      <Form
        error={!!errorMessage}
        success={!!successMessage}
        onSubmit={handleSubmit}
      >
        <FormGroup widths="equal">
          <FormField
            control={Input}
            label="Telegram"
            value={telegram}
            onChange={(event) => setTelegram(event.target.value)}
            placeholder="Введите здесь"
          />
          <FormField
            control={Input}
            label="Discord"
            value={discord}
            onChange={(event) => setDiscord(event.target.value)}
            placeholder="Введите здесь"
          />
        </FormGroup>
        <Button primary>Сохранить</Button>
        <Message
          style={{ wordBreak: "break-word" }}
          error
          header="Ну что ж такое!"
          content={errorMessage}
        />
        <Message success header="Успех!" content={successMessage} />
      </Form>
    </Layout>
  );
};

export default AddContact;
