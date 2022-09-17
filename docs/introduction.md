---
sidebar_position: 1
---

## what is snapr?

snapr is an audacious idea about creating a universal basic income with **web3**, **blockchain** and **cryptocurrency**. these technologies make it possible for ordinary people to build an economic solution that benefits **everyone**. yes, everyone. thanks to the giant shoulders this idea rests on, it's not even all that difficult.

snapr is implemented as a [substrate](https://substrate.io) based blockchain using [nominated proof of stake](https://research.web3.foundation/en/latest/polkadot/NPoS/index.html), much like polkadot.

### does snapr depend on other blockchains?

snapr is a level-one, proof-of-stake chain which means that it has no upstream dependencies on a relay chain or virtual machine. whilst its source code is based on substrate and cumulus, snapr can continue to function without upstream activity in those open source projects.

### who keeps snapr running?

- **everyone and anyone** supports the network just by using it. small usage fees finance the independent entities who provide imperative services for the network.
  - every time tokens are sent or received, a very small transaction fee is paid to a *validator* who process the transaction.
  - each time an identity is verified a small fee is paid to the entity who verifies the identity.
- **transaction validators** are independent node operators who process all transactions on the network. validating is incentivised by the transaction fees paid to validator maintainers for each transaction they process. anyone may validate on the network by maintaining a validator node and submitting the validator bond.
- **identity verifiers** are independent entities who process identity verifications for the users of the network. validating is incentivised by the transaction fees paid to validators for each transaction they process. anyone may validate on the network by running a validator node and submitting the validator proof-of-stake bond.

### who finances this project and where does the money to develop and maintain it come from?

on similar blockchains, tokens (money) are created at the genesis of the blockchain. a written chain specification (chainspec) describes how much token is created and what accounts those tokens are allocated to. many well-known blockchains obfuscate the chainspec genesis state for what is generally considered to be technical reasons but which has the side effect of making scrutiny difficult or sometimes impossible. this makes it arduous for ordinary people to understand who is holding tokens and what the distribution of the total circulation looks like.

because this network is created for the public good, the chain specification is provided without obfuscation in order to encourage scrutiny. in total, 30,015,137,092,992.0 (just over thirty trillion) tokens are created in the chainspec. which is the number of tokens required to distribute one token per day, to each human, for about ten years. [united nations population projections](https://population.un.org/wpp/) were used to arrive at the total supply. most of the token is allocated to a number of faucet accounts which are tasked with token distribution to identified humans. an allocation of tokens is also made for payments to identity verifiers. validator payments are taken directly from transaction fees. there is no allocation of token for developers or project contributors who are encouraged to run a validator if they require a token income stream.

snapr is not a legal entity in any jurisdiction. it has never sought or received financing from any entity. there is no list of sponsors or venture capital providers to thank. just a community of node operators and technologists whose membership may be anyone.

### how much is snapr worth?

the intention behind snapr is that all humans everywhere, should have access to:

- wholesome food
- clean clothing
- adequate shelter
- complete healthcare
- modern communication

required for life, without hindrance or obstacle and without exception.

to this end, snapr aspires to a unit value equivalent to that which is required for the subsistence of one human on the day it is transacted.

specifically: it should be possible to exchange 365 units of snapr for all of the necessary food, clothing, shelter, healthcare and communication requirements of one individual for a period of one year.

if you are exchanging fiat or other currency for snapr, you should acknowledge this aspiration by providing an exchange value equivalent to the cost of daily human subsistence in the region in which the snapr side of the  transaction originates. there is no enforcement mechanism envisaged or realised for this aspiration but it is hoped that the motivations and intentions of those transacting snapr are aligned with this aspiration.

## using snapr

snapr is still in development, so it's not very easy to use right now. however, if you are familiar with substrate tools, like polkadot.js, you may create a wallet and associate it with your signed identity. the intent is to commence distribution of snapr to wallets associated with a unique, signed identity as early as possible.

in the spirit of decentralisation, anyone who already has a signed identity, may sign the identity of anyone they know and trust to be using only one unique identity. credibility with the distribution algorithm may be won or lost by providing signatures to honest or dishonest identities respectively (see: [signatures](identity/signatures)).
