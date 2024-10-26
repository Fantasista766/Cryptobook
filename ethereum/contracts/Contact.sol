// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Contact {
    address public owner;
    string public telegram;
    string public discord;
    string public desc;

    constructor(
        address _owner,
        string memory _telegram,
        string memory _discord
    ) {
        owner = _owner;
        telegram = _telegram;
        discord = _discord;
    }

    function setTelegram(string memory _telegram) external onlyOwner {
        telegram = _telegram;
    }

    function setDiscord(string memory _discord) external onlyOwner {
        discord = _discord;
    }

    function setDesc(string memory _desc) external onlyOwner {
        desc = _desc;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "not an owner");
        _;
    }
}
