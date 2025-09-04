# TEENet Landing Page Outline

> Purpose: High-converting public homepage communicating the problem, TEENet's differentiated solution (TEE + Threshold Crypto + MPC), core features, credibility, and developer-focused calls-to-action.

---
## 1. Hero Section
- **Eyebrow**: Trustless TEE-Based Off-Chain Compute + Built-in Key Management
- **Headline**: Trustless Off-Chain Execution with Built‑In Private Key Security
- **Subheadline**: A trustless TEE-powered off-chain execution layer with built-in key management, purpose-built for decentralized applications.
- **Primary CTA**: Get Started (SDK + Portal)
- **Secondary CTA**: View Architecture / Read Docs
- **Social Proof Placeholder**: (Add logos / "Backed by" / early adopter badges later)
- **Visual**: Diagram or animated illustration (Key shards + TEE nodes performing a signing round; majority vote indicator)

---
## 2. Problem Section
- **Section Title**: Off-Chain Signing Stacks Are a Persistent Security Liability
- **Pain Points (bulleted)**:
  - Single-server / single-HSM architectures create a catastrophic blast radius if compromised.
  - High-frequency signing increases key exposure surface (bridges, oracles, treasury automation).
  - Protecting keys ≠ protecting the execution path: code tampering, data leakage, and insider access remain.
  - Manual redundancy & quorum logic add complexity while opening new attack vectors (misconfiguration, inconsistent state).
  - Attackers target opaque off-chain services that underpin “trustless” on-chain processes (bridge exploits, oracle manipulation).
- **Supporting Statement**: The real blocker isn’t just centralization—it’s unverified, mutable, and easily compromised off-chain execution environments handling critical keys.

---
## 3. Solution Overview
- **Headline**: Trustless Off-Chain Computation + Native Threshold Key Management
- **Explainer Copy**: TEENet is an attestation-gated mesh of TEEs where signing‑intensive logic executes redundantly and scales horizontally. A pipelined enclave scheduler + parallel threshold MPC paths allow clusters to sustain 500+ TPS while preserving deterministic quorum validation. Keys are born sharded, periodically reshared, and only ever engaged via threshold MPC. Majority voting validates execution outputs before signing—yielding resilient, verifiable results without central trust.
- **3 Pillars (icons)**:
  1. Attested Off-Chain Execution (confidential + integrity enforced)
  2. Built-In Threshold Key Lifecycle (generation → sharding → resharing)
  3. Efficient Redundant MPC + Majority Voting

---
## 4. How It Works (Step Flow)
1. Integrate SDK.
2. Generate key inside TEENet → instant threshold splitting; no full key ever materializes.
3. Deploy program instances (bridge/oracle/treasury logic) to multiple attested TEEs.
4. Parallel enclave execution produces candidate outputs / intents.
5. Majority (configurable quorum) voting selects canonical result.
6. Threshold MPC signing: shards cooperate; signature emitted—key never reconstructed.
7. Periodic resharing rotates shard distribution.
8. Attestation + execution metadata exposed for verification & auditing.

Include a simplified architecture graphic (Nodes, Portal, SDK, Voting, Signing Round).

---
## 5. Core Feature Blocks

### 5.1 Private Key Safety & Lifecycle
- Born-sharded generation inside attested TEEs (never in full memory)
- Continuous remote attestation gating participation
- Threshold cryptography removes single compromise failure mode
- Policy-based periodic resharing (shrinks exposure window)
- Multi-chain signature scheme support (placeholder list)
- Auditable key lifecycle events (gen, resharing, signing rounds)

### 5.2 Trustless Off-Chain Program Security
- Execution restricted to verified TEEs (operator / host blind to data)
- Remote attestation proves enclave identity & integrity
- No shell / admin pathway → mitigates insider risk
- Majority output validation filters tampering / faults
- Divergent enclaves quarantined without halting service

### 5.3 Redundant Secure MPC & Consensus
- Parallel MPC across enclave set (no node holds full key)
- Quorum / majority configurable per project risk & latency profile
- Low-latency aggregation pipeline for frequent signing bursts
- Fault isolation & graceful degradation

### 5.4 Developer Experience
- Lightweight multi-language SDK (sign(), verifyAttestation())
- Portal: key lifecycle, deployment, redundancy tuning
- Real-time node & shard health + attestation proofs
- Structured logs & signing round traces
- Opinionated secure defaults for high-frequency workflows

---
## 6. Comparative Value (Optional Table / Grid)
Columns: Single Server | HSM Cluster | Generic MPC | TEENet
Rows: Full Key Exposure Risk | Execution Integrity | High-Frequency Scaling | Operational Complexity | Built-In Redundancy & Voting | Attestation Transparency | Latency Efficiency.

---
## 7. Primary Use Cases
- Cross-chain asset workflows (burn/mint, bridging) with continuous signing
- High-frequency oracle / price feed attestation
- Automated treasury & governance policy execution
- Custody / wallet infrastructure needing verifiable off-chain logic
- Multi-region resilient signing clusters
- Low-latency batch signing (bridge relayers, settlement coordinators)

---
## 8. Developer Journey CTA Section (Keep concise for MVP)
- **Title**: Launch in Minutes
- **Bullets (condensed)**:
  1. Install SDK
  2. Generate & shard key in portal
  3. Deploy logic to attested enclaves
  4. Set quorum & redundancy
  5. Call sign() from your dApp
- **CTA Buttons**: Quickstart | Portal | Docs

<!-- Deferred (Former Section 9: Architecture Deep Dive) for post-launch doc page -->

## 10. Security & Trustlessness Highlights
- Hardware Root of Trust: Only remotely attested TEEs participate.
- No Plaintext Keys: Shards sealed; signing via MPC only.
- Periodic / Policy Resharing: Shrinks exposure horizon.
- Operator Minimization: No privileged admin / shell channel.
- Verifiable Execution: Majority voting + attestation metadata.
- Fault Isolation: Divergent enclave outputs flagged & excluded.

---
## 11. FAQ (MVP Trimmed)
- Trustless off-chain—how?  
  Attestation-gated TEEs + distributed MPC + quorum voting remove single-operator trust.
- Do you ever reconstruct the key?  
  No. Threshold MPC produces signatures without assembling the private key.
- Throughput expectations?  
  Clusters designed to scale to hundreds of signature requests/sec (quorum + hardware dependent).
- Latency impact of redundancy?  
  Parallel enclave execution + aggregation keeps added overhead minimal.
- Can I audit enclave integrity?  
  Portal & API expose attestation measurements and signing round metadata.

<!-- Deferred (Former Section 12: Roadmap) until traction; avoid signaling incompleteness at launch -->

---
## 13. Final CTA Banner
- **Copy**: Make off-chain signing & compute trustless, resilient, and verifiable.
- **Primary CTA**: Request Access / Start Building
- **Secondary CTA**: Read the Docs

---
## 14. Footer
- Basic navigation: Docs | Portal | GitHub | Status (placeholder)
- Copyright
- Security contact / disclosure link (placeholder)

---
## Content Tone & Style Guidelines
- Technical, precise, credibility-first; avoid vague hype.
- Emphasize trustless off-chain execution, verifiable security, non-exposure of keys.
- Highlight efficiency for high-frequency signing workloads.
- Keep paragraphs short (2–3 sentences max in marketing copy blocks).

---
## Asset / Implementation Checklist (For Designers & Devs)
- [ ] Hero illustration (distributed TEE + key shards)
- [ ] Architecture diagram (SVG)
- [ ] Feature icons (5)
- [ ] Voting flow mini-diagram
- [ ] CTA button states (primary / secondary / dark mode)
- [ ] Mobile responsive layout test
- [ ] Dark mode asset variants

---
## Mapping to Source Description
All retained MVP sections derive from primitives in `description.md`: Problem (risk & key safety), Solution (TEE + threshold + MPC), Features (safety, security, redundancy, DX), Security Highlights (attestation, non-exposure), FAQ (common objections). Removed sections (Architecture Deep Dive, Roadmap) will shift to docs after launch.

---
## Next Steps
1. Lock copy for Sections 1–13 (current trimmed set).
2. Implement components in `page.tsx` (hero, problem, solution, features, security, FAQ, CTA, footer).
3. Add basic analytics (scroll & CTA click) to validate omitted deep-dive demand.
4. Prepare separate docs page for deferred Architecture & Roadmap.
5. Post-launch: collect FAQ expansion candidates from support queries.
