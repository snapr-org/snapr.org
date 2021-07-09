---
sidebar_position: 5
---

## what needs to be done?

### administrative

- registration of a legal entity to steward the snapr balance allocations and faucet stash accounts.
- definition of and onboarding procedure for the snapr stewardship forum.
- homepage content (snapr.org)

### technical

- the orml and ethereum bridging code needs to be removed from snapr-node/snapr-runtime or a technical argument for retaining it is required. requires rust competence and crypto experience.
- the polkadot.js integration is missing type definitions that would enable the use of that interface. requires javascript/typescript competence.
- the identity signing piece requires thought and design. requires technical architecture competence.
- implementation of the faucet queuing mechanism for daily payouts. requires rust (lambda) and/or nodejs competence.
- implementation of the payouts mechanism. requires rust (lambda) and/or nodejs competence.
- deployment of testnet.
- homepage design and graphics (snapr.org). requires graphic design competence.

## what is already done?
- forking of the substrate node/runtime codebase and general snapr customisations
- forking of the telemetry codebase and general snapr customisations
- forking of the explorer codebase and general snapr customisations
- genesis chain spec (can be revisited if the balance allocation is determined to need revision by the stewardship forum)
- deployment codebase (terraform)
- telemetry deployment (api, ui)
- explorer deployment (rds, gql, ui)
- mainnet deployment (bootnodes: trillian, ford, arthur)
- mainnet and testnet key generation
- mainnet launch
