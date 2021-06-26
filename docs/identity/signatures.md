---
sidebar_position: 1
---

# signatures, identity and wallets

each individual who wishes to receive payouts from the distribution algorithm must create one identity on the snapr blockchain.  

an identity is not a wallet. it is just a record of an individual human.  

an identity does not need to contain any personal information, but it may.

each individual may have one or more wallets, but only one wallet address is eligible for a payout from the distribution algorithm on any given day.  

an individual may nominate any wallet to receive payouts intended for their identity.

an identity must be signed by another identity. the signature must have an expiry date within the following 366 days in order for the signed identity (and those further down the chain, reliant on it) to be eligible for payouts.

a signing identity must be in receipt of payouts in order for the identities it has signed (and those signed by them) to be eligible for payouts.

a signature may be revoked by the signer
- if the signer is no longer confident that the signee has only one identity
- if the signer believes that the signee may be providing signatures to others (knowingly or not) who have more than one identity

an individual should only give or accept a signature from another individual they trust. accepting a signature that is later revoked could be problematic for either party and others in the chain of trust.
