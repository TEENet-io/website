# Project TEENet

## Problem Statement
Modern web3 or decentralized applications (dApps) often require to operate some private key to operate on-chain digital assets. For instance, Circle uses a private key to sign a message that confirms the burning of USDC tokens on one blockchain. The signature can later be used to mint USDC on another blockchain to achieve cross-chain USDC transfer. The safety of the private key as well as the security of the program that operates the private key become the security bottleneck of dApps nowadays and it is not easy for developers to solve the two problems at the same time. 

## Solution Overview
 TEENet provides a solution to both the private key safety and program security faced by dApps. By leveraging the Trusted Execution Environment (TEE) technology, threshold cryptography and multi-party computation (MPC), it deploys a distributive TEE network to enable secure multi-party computation and ensure that private keys are never exposed to the outside world. Moreover, TEENet provides a secure and verifiable TEE environment for programs that operate private keys, ensuring the integrity and correctness of the program's execution. 

 To use TEENet, developers only need to integrate the TEENet SDK into their dApps to perform private key signing. Users can generate a private key and link the key to their code via the project management portal. They also run multiple instances of their program on multiple TEE machines to introduce computational redundancy so as to achieve extra security without increasing their code complexity. 

## Key Features

### Private Key Safety

* Use of TEE technology
  * Data privacy - private key data are protected within the TEE, ensuring that even the host machine cannot access it.
  * Program integrity - the TEE guarantees that the code running inside it has not been tampered with, providing a secure execution environment.
  * Attestation - TEEs inside TEENet are verified before being allowed to participate in the network, ensuring that only trusted hardware is used.

* Threshold cryptography
  * Private keys splitted and stored distributively on TEENet nodes, preventing loss or leakage due to single point of failure or compromise.
  * Private key re-splitted (reshared) periodically to further enhance security.
  * Mainstream signature schemes supported for dApps hosted on different blockchains.

* MPC
  * No private key exposed during the computation on a single device
  * Computation redundancy - no single points of failure for the signing service

### Program Security

* Secure execution environment
  * Program run on a TEE node ensuring privacy and integrity.
  * TEE nodes verified to ensure only trusted hardware is used.
  * Access control - no maintenance access to the TEE nodes is allowed, preventing human-involved attacks or data breaches.

### Integration & Usability

* TEENet SDK
  * Easy integration - developers can quickly integrate the TEENet SDK into their dApps with minimal effort.
  * Comprehensive documentation - the SDK comes with detailed documentation and examples to help developers get started.
  * Support for multiple programming languages - the SDK is designed to work with various programming languages commonly used in dApp development.

* Project management portal 
  * Easy private key management (generating new keys, linking a key to the current project, etc) via UI/UX
  * TEENet node dashboard reporting TEENet node status in real time
  * Logging and monitoring tools for tracking key usage and system performance

* Built-in majority voting mechanism
  * Users can run multiple instances of their program on different TEE nodes and only sign on the hash voted by the majority.
  * Computation redundancy - users can use different RPC node services to run the same program.
  * Multiple instances can easily be deployed via the project management portal.
  * Majority voting can be configured via the portal.