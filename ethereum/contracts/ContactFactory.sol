// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Contact} from "./Contact.sol";

contract ContactFactory {
    mapping(address => address) public ownerToContact;

    modifier contactNotCreated() {
        require(
            ownerToContact[msg.sender] == address(0),
            "you already created your contact"
        );
        _;
    }

    function createContact(
        string memory _telegram,
        string memory _discord
    ) public contactNotCreated {
        ownerToContact[msg.sender] = address(
            new Contact(msg.sender, _telegram, _discord)
        );
    }

    function createContact(string memory _telegram) public contactNotCreated {
        ownerToContact[msg.sender] = address(
            new Contact(msg.sender, _telegram, "")
        );
    }
}
