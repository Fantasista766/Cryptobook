import { Button, MenuItem, Menu } from "semantic-ui-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [currentAccount, setCurrentAccount] = useState();

  const hadnleLogInClick = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("У вас нет метамаска");
    }
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Menu style={{ marginTop: "20px" }}>
      <Link href="/">
        <MenuItem>Главная</MenuItem>
      </Link>

      <Link href="/add">
        <MenuItem>Записать контакт</MenuItem>
      </Link>

      <Link href="/show">
        <MenuItem>Посмотреть контакт</MenuItem>
      </Link>

      <MenuItem position="right">
        {!currentAccount ? (
          <Button primary onClick={hadnleLogInClick}>
            Вход
          </Button>
        ) : (
          <Link href="/user">
            <Button primary onClick={hadnleLogInClick}>
              {currentAccount}
            </Button>
          </Link>
        )}
      </MenuItem>
    </Menu>
  );
};

export default Header;
