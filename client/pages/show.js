import Layout from "../components/Layout.js";
import getContactByAddress from "../utils/getContactByAddress.js";
import { Button, Form, FormField, Message } from "semantic-ui-react";
import { useRef, useState } from "react";

const ShowContact = () => {
  const [telegram, setTelegram] = useState();
  const [discord, setDiscord] = useState();
  const [desc, setDesc] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const addressRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const address = addressRef.current.value;
    setTelegram("");
    setDiscord("");
    setDesc("");
    setIsLoading(true);
    setErrorMessage("");

    if (!address) {
      setErrorMessage("Адрес пользователя не может быть пустым!");
      return;
    }

    try {
      const contact = await getContactByAddress(address);
      setTelegram(contact.telegram);
      setDiscord(contact.discord);
      setDesc(contact.desc);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Form error={!!errorMessage} onSubmit={handleSubmit}>
        <FormField>
          <label>Введите адрес здесь</label>
          <input ref={addressRef} placeholder="Вот прям тут" />
        </FormField>

        <Button loading={isLoading} primary type="submit">
          Посмотреть
        </Button>

        <Message error header="Ну что ж такое!" content={errorMessage} />
      </Form>
      {telegram && <h2>Telegram: {telegram}</h2>}
      {discord && <h2>Discord: {discord}</h2>}
      {desc && <h2>Description: {desc}</h2>}
    </Layout>
  );
};

export default ShowContact;
