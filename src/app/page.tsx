'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Trustless off-chain—how?",
      answer: "Attestation-gated TEEs + distributed MPC + quorum voting remove single-operator trust."
    },
    {
      question: "Do you ever reconstruct the key?",
      answer: "No. Threshold MPC produces signatures without assembling the private key."
    },
    {
      question: "Throughput expectations?",
      answer: "Clusters designed to scale to hundreds of signature requests/sec (quorum + hardware dependent)."
    },
    {
      question: "Latency impact of redundancy?",
      answer: "Parallel enclave execution + aggregation keeps added overhead minimal."
    },
    {
      question: "Can I audit enclave integrity?",
      answer: "Portal & API expose attestation measurements and signing round metadata."
    }
  ];

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <span className="text-xl font-bold text-blue-600">
                  TEENet
                </span>
              </div>
              <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                <a href="#features" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                  Features
                </a>
                <a href="#how-it-works" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                  How it Works
                </a>
                <a href="#faq" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                  FAQ
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <a href="#" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-4xl">
              <h1 className="circle-h1 font-bold tracking-tight text-gray-900">
                Trustless Off-Chain Execution with Built‑In Private Key Security
              </h1>
              <p className="mt-4 circle-large-text text-gray-500">
                A trustless TEE-powered off-chain execution layer with built-in key management, purpose-built for decentralized applications.
              </p>
            </div>
            <div className="mt-10">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 w-40"
                >
                  Get Started
                  <svg className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 w-40"
                >
                  Docs
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">The Problem</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Off-Chain Signing Stacks Are a Persistent Security Liability
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-red-600">
                  <div className="h-2.5 w-2.5 rounded-full bg-white" />
                </div>
                Catastrophic Blast Radius
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Single-server / single-HSM architectures create a catastrophic blast radius if compromised.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-orange-600">
                  <div className="h-2.5 w-2.5 rounded-full bg-white" />
                </div>
                High-Frequency Exposure
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">High-frequency signing increases key exposure surface (bridges, oracles, treasury automation).</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-yellow-600">
                  <div className="h-2.5 w-2.5 rounded-full bg-white" />
                </div>
                Unprotected Execution Path
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Protecting keys ≠ protecting the execution path: code tampering, data leakage, and insider access remain.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">The Solution</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trustless Off-Chain Computation + Native Threshold Key Management
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2">
              <div className="relative bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg className="h-5 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.661 2.237a.75.75 0 01.678 0 11.947 11.947 0 007.678 2.831.75.75 0 01.729.744v8.059a3.75 3.75 0 01-1.525 3.024l-6.189 4.547a.75.75 0 01-.88 0l-6.189-4.547A3.75 3.75 0 012.246 13.87V5.812a.75.75 0 01.729-.744 11.947 11.947 0 007.678-2.831zm0 2.224L10 2.237l.339.224a13.45 13.45 0 008.407 3.099v7.311a2.25 2.25 0 01-.915 1.815l-6.189 4.547a.25.25 0 01-.284 0l-6.189-4.547a2.25 2.25 0 01-.915-1.815V5.56a13.45 13.45 0 008.407-3.099z" clipRule="evenodd" />
                  </svg>
                  Attested Off-Chain Execution
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  Confidential + integrity enforced through hardware-based trusted execution environments.
                </dd>
              </div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg className="h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z" clipRule="evenodd" />
                  </svg>
                  Built-In Threshold Key Lifecycle
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  Generation → sharding → resharing. Keys are born sharded and never exist in full.
                </dd>
              </div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg className="h-5 w-5 flex-none text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Threshold MPC Signing
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  Conducted by an attestation-gated mesh of TEEs without human intervention.
                </dd>
              </div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg className="h-5 w-5 flex-none text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                  </svg>
                  Parallel Execution & Majority Voting
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  Multiple program instances with majority voting for tamper resistance.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">How It Works</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple integration, robust security
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Deploy in minutes with enterprise-grade protection.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <ol className="relative border-l border-gray-200">
              {[
                { title: "Integrate SDK", desc: "Add TEENet SDK to your application with minimal code changes", color: "blue" },
                { title: "Sign up & Log in & create project in portal", desc: "Set up your project environment through the TEENet portal", color: "green" },
                { title: "Generate key inside TEENet", desc: "Instant threshold splitting; no full key ever materializes", color: "purple" },
                { title: "Deploy program instances", desc: "Bridge/oracle/treasury logic deployed to (multiple) attested TEE(s)", color: "orange" },
                { title: "Configure majority voting on signing hash", desc: "Set up voting parameters if needed for your use case", color: "red" },
                { title: "Run app(s)", desc: "Your applications are now running with secure threshold key management", color: "indigo" }
              ].map((step, index) => (
                <li key={index} className="mb-10 ml-6">
                  <span className={`absolute flex items-center justify-center w-8 h-8 bg-${step.color}-100 rounded-full -left-4 ring-4 ring-white`}>
                    <span className="text-sm font-semibold text-gray-900">{index + 1}</span>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Core Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Enterprise-grade security meets developer-friendly integration
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Private Key Safety & Lifecycle */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Private Key Safety & Lifecycle</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Born-sharded generation inside attested TEEs (never in full memory)</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Continuous remote attestation gating participation</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Threshold cryptography removes single compromise failure mode</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Periodic resharing (shrinks exposure window)</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Auditable key lifecycle events (gen, resharing, signing rounds)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Trustless Off-Chain Program Security */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8">
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Trustless Off-Chain Program Security</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Execution restricted to verified TEEs (operator / host blind to data)</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Remote attestation proves TEE nodes&apos; identity & integrity</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>No shell / admin pathway → mitigates insider risk</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Majority output validation filters tampering / faults</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Developer Experience */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 p-8">
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Developer Experience</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Lightweight multi-language SDK (sign(), verifyAttestation())</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Portal: key lifecycle, deployment, redundancy config</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Real-time node + attestation proofs</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Structured logs & signing round traces</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Comparison</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How TEENet Compares
            </p>
          </div>
          
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Capability
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Single Server
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    HSM Cluster
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Generic MPC
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-blue-600 uppercase tracking-wider">
                    TEENet
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Full Key Exposure Risk
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-red-600">✗ High</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-orange-600">✗ Medium</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-yellow-600">✓ Low</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-green-600 font-semibold">✓ None</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Execution Integrity
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-red-600">✗ None</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-red-600">✗ None</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-orange-600">✗ Limited</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-green-600 font-semibold">✓ Hardware-enforced</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    High-Frequency Scaling
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-yellow-600">✓ Good</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-orange-600">✗ Limited</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-red-600">✗ Poor</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-green-600 font-semibold">✓ 500+ TPS</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Operational Complexity
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-green-600">✓ Simple</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-orange-600">✗ Complex</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-red-600">✗ Very Complex</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-green-600 font-semibold">✓ Minimal</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Built-In Redundancy & Voting
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-red-600">✗ None</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-yellow-600">✓ Limited</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-orange-600">✓ Partial</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-green-600 font-semibold">✓ Full</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Attestation Transparency
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-red-600">✗ None</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-red-600">✗ None</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-red-600">✗ None</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-green-600 font-semibold">✓ Real-time</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Latency Efficiency
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-green-600">✓ Excellent</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-yellow-600">✓ Good</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-orange-600">✗ Poor</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-green-600 font-semibold">✓ Optimized</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">FAQ</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </p>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <dl className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm">
                  <dt>
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="flex w-full items-start justify-between text-left p-6"
                    >
                      <span className="text-base font-semibold leading-7 text-gray-900">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={`h-5 w-5 text-gray-500 transition-transform ${
                            openFaq === index ? 'rotate-180' : ''
                          }`}
                        />
                      </span>
                    </button>
                  </dt>
                  {openFaq === index && (
                    <dd className="px-6 pb-6">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Make off-chain signing & compute trustless, resilient, and verifiable
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join the future of secure, distributed key management for decentralized applications
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Request Access
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Read the Docs <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            <div className="pb-6">
              <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Docs
              </a>
            </div>
            <div className="pb-6">
              <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Portal
              </a>
            </div>
            <div className="pb-6">
              <a href="https://github.com/TEENet-io/" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                GitHub
              </a>
            </div>
            <div className="pb-6">
              <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Status
              </a>
            </div>
            <div className="pb-6">
              <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Security
              </a>
            </div>
          </nav>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2024 TEENet. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}