---
title: "networks"
description: "snapr chain networks"
lead: "snapr chain's networks"
---


## snapr mainnet
**the snapr mainnet has been launched in "canary" mode.** as such it carries the risk of potentially disruptive bugs.

while the snapr mainnet is in "canary" mode, the chain may require reset in the event of catastrophic failure.
only SNAPR account balances at the time of the failure would carry over to a replacement network.

### mainnet info sheet

```
| key                 | value                    |
| ------------------- | ------------------------ |
| currency            | SNAPR                    |
| precision           | 18                       |
| evm chain id        | undefined                |
| ss58 format         | 42                       |
| block authoring     | babe                     |
| finality            | grandpa                  |
| block time          | 10s                      |
| block size          | 1.25mb to 3.75mb         |
| http rpc            | undefined                |
| websocket           | wss://trillian.snapr.com |
| websocket           | wss://ford.snapr.net     |
| websocket           | wss://arthur.snapr.org   |
```

## snapr testnet
snapr testnet is a common playground for deploying and testing defi apps. it is
recommended to first deploy apps on the testnet before launching on mainnet.

⚠️ **snapr testnet tokens have no value** and may be destroyed on testnet upgrades.

### testnet info sheet

```
| key                 | value            |
| ------------------- | ---------------- |
| currency            | SNAPR            |
| precision           | 18               |
| evm chain id        | undefined        |
| ss58 format         | 42               |
| block authoring     | babe             |
| finality            | grandpa          |
| block time          | 10s              |
| block size          | 1.25mb to 3.75mb |
| http rpc            | undefined        |
| websocket           | undefined        |
