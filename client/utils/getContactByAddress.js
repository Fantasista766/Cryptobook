import contactFactory from "../contactFactory.js";
import Contact from "../Contact.js";
import { ZeroAddress } from "ethers";

const getContactByAddress = async (address) => {
  const contactAddress = await contactFactory.ownerToContact(address);
  if (contactAddress === ZeroAddress) {
    throw new Error("Такой контакт не найден...");
  }
  console.log(`${contactAddress}`);
  const contact = Contact(contactAddress);
  const desc = await contact.desc();
  const discord = await contact.discord();
  const telegram = await contact.telegram();

  console.log(`desc: ${desc}`);
  console.log(`discord: ${discord}`);
  console.log(`telegram: ${telegram}`);

  return { telegram, discord, desc };
};

export default getContactByAddress;
