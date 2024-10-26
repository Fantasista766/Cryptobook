import hre, { ethers } from "hardhat";

async function main() {
  // const [signer] = await ethers.getSigners();
  // console.log("Deploying with the account:", signer.address);

  // const ContactFactory = await ethers.getContractFactory("ContactFactory");
  // const contactFactory = await ContactFactory.deploy();
  // console.log("After deploy");
  // await contactFactory.waitForDeployment();

  // console.log(contactFactory.target);

  const addr = "0x15Bb44F3c294691B3149A14E7b2ea309518828df";
  await hre.run("verify:verify", {
    address: addr,
  });
}

main()
  .then(() => console.log("running"))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
