---
title: LSP1 Universal Receiver Delegate UP
sidebar_position: 3
---

# LSP1UniversalReceiverDelegateUP

:::info Solidity contract

[`LSP1UniversalReceiverDelegateUP.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/main/contracts/LSP1UniversalReceiver/LSP1UniversalReceiverDelegateUP/LSP1UniversalReceiverDelegateUP.sol)

:::

The **LSP1UniversalReceiverDelegateUP** is a contract called by the **[`universalReceiver(...)`](./lsp0-erc725-account.md#universalreceiver)** function of the **[LSP0ERC725Account](./lsp0-erc725-account.md)** contract that:

- Writes the keys representing **[LSP7-DigitalAsset](./lsp7-digital-asset.md)** and **[LSP8-IdentifiableDigitalAsset](./lsp8-identifiable-digital-asset.md)** assets received into the account storage, and remove them when the balance is zero according to the **[LSP5-ReceivedAssets Standard](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md)**.

- Writes the keys representing **[LSP9-Vault](./lsp9-vault.md)** vaults owned into your account storage, and remove them when **transferring ownership** to other accounts according to the **[LSP10-ReceivedVaults Standard](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md)**.

The following requirements are required to execute the logic above correctly. First, the owner of the **LSP0ERC725Account** contract should be an **[LSP6KeyManager](./lsp6-key-manager.md)** contract. Additionally, the **[LSP6KeyManager](./lsp6-key-manager.md)** contract should be granted the **permission to [`SETDATA`](../universal-profile/04-lsp6-key-manager.md#permission-values)** on the account (otherwise the transaction will pass but will not write any keys to the storage).

:::note
**_LSP1UniversalReceiverDelegateUP contract also contains the methods from_ [_ERC165_](https://eips.ethereum.org/EIPS/eip-165) :**

```solidity
function supportsInterface(bytes4 interfaceId) public view returns (bool)
```

:::

## Functions

### constructor

```solidity
constructor()
```

Registers the **[LSP1UniversalReceiverDelegate interface id](./interface-ids.md)**.

### universalReceiverDelegate

```solidity
function universalReceiverDelegate(
    address sender,
    bytes32 typeId,
    bytes memory data
) public payable returns (bytes memory result)
```

Writes the keys of the received **LSP7DigitalAsset**, **LSP8IdentifiableDigitalAsset** assets and **LSP9Vault** vaults into the account storage according to the **LSP5ReceivedAssets** and **LSP10ReceivedVaults** Standard.

The keys representing an **asset** or a **vault** are cleared when the asset/vault is no longer owned by the account.

#### Parameters:

| Name     | Type    | Description                                                          |
| :------- | :------ | :------------------------------------------------------------------- |
| `sender` | address | The token/vault smart contract address.                              |
| `typeId` | bytes32 | The token hooks.                                                     |
| `data`   | bytes   | The data associated with the asset or vault transfer (concatenated). |

#### Return Values:

| Name     | Type  | Description                                                                                               |
| :------- | :---- | :-------------------------------------------------------------------------------------------------------- |
| `result` | bytes | The value returned by the **Key Manager**'s **[`execute(...)`](./lsp6-key-manager.md#execute)** function. |

## References

- [LUKSO Standards Proposals: LSP1 - Universal Receiver (Standard Specification, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md)
- [LSP1 Universal Receiver: Solidity implementations (GitHub)](https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP1UniversalReceiver)