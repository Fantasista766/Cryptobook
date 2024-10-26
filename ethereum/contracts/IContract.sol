// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IContact {
    function setTelegram(string memory _telegram) external;

    function setDiscord(string memory _discord) external;

    function setDesc(string memory _desc) external;
}
