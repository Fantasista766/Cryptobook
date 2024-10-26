import { ethers } from "ethers";
import provider from "./provider.js";

const address = "0x15Bb44F3c294691B3149A14E7b2ea309518828df";
const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_telegram",
        type: "string",
      },
    ],
    name: "createContact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_telegram",
        type: "string",
      },
      {
        internalType: "string",
        name: "_discord",
        type: "string",
      },
    ],
    name: "createContact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ownerToContact",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const ethAbi = [
  "function ownerToContact(address) public view returns (address)",
  "function createContact(string, string) public",
  "function createContact(string) public",
];
const contactFactory = new ethers.Contract(address, ethAbi, provider);

export default contactFactory;
