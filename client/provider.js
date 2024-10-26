import { ethers } from "ethers";

let provider;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  provider = new ethers.BrowserProvider(window.ethereum);
} else {
  provider = ethers.getDefaultProvider("http://localhost:8545/");
}

export default provider;
