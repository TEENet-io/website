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
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                TEENet
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                How It Works
              </a>
              <a href="#security" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Security
              </a>
              <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                FAQ
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Docs
              </a>
              <a href="https://github.com/TEENet-io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <button className="ml-8 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#6366f1] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Trustless Off-Chain Execution with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Built-In Private Key Security
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A trustless TEE-powered off-chain execution layer with built-in key management, purpose-built for decentralized applications.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  Get Started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Read Documentation <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0ea5e9] to-[#6366f1] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Problem Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">The Problem</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Off-Chain Signing Stacks Are a Persistent Security Liability
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The real blocker isn&apos;t just centralization—it&apos;s unverified, mutable, and easily compromised off-chain execution environments handling critical keys.
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
            <p className="mt-6 text-lg leading-8 text-gray-600">
              TEENet is an attestation-gated mesh of TEEs where signing-intensive logic executes redundantly and scales horizontally. A pipelined enclave scheduler + parallel threshold MPC paths allow clusters to sustain 500+ TPS while preserving deterministic quorum validation.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
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
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                  </svg>
                  Efficient Redundant MPC
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  Parallel execution with majority voting ensures resilient, verifiable results.
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
                { title: "Generate Key Inside TEENet", desc: "Instant threshold splitting; no full key ever materializes", color: "green" },
                { title: "Deploy Program Instances", desc: "Bridge/oracle/treasury logic deployed to multiple attested TEEs", color: "purple" },
                { title: "Parallel Enclave Execution", desc: "Produces candidate outputs / intents", color: "orange" },
                { title: "Majority Voting", desc: "Configurable quorum selects canonical result", color: "red" },
                { title: "Threshold MPC Signing", desc: "Shards cooperate; signature emitted—key never reconstructed", color: "indigo" },
                { title: "Periodic Resharing", desc: "Rotates shard distribution automatically", color: "teal" },
                { title: "Attestation & Auditing", desc: "Execution metadata exposed for verification & auditing", color: "gray" }
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
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Private Key Safety */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Private Key Safety & Lifecycle</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Born-sharded generation inside attested TEEs</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Continuous remote attestation gating</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Policy-based periodic resharing</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Multi-chain signature scheme support</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Program Security */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8">
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Trustless Off-Chain Program Security</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Execution restricted to verified TEEs</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Remote attestation proves enclave integrity</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>No shell / admin pathway mitigates insider risk</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Majority output validation filters tampering</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* MPC & Consensus */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8">
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Redundant Secure MPC & Consensus</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Parallel MPC across enclave set</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Configurable quorum per project risk profile</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Low-latency aggregation pipeline</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Fault isolation & graceful degradation</span>
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
                      <span>Lightweight multi-language SDK</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Portal for key lifecycle management</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Real-time node & shard health monitoring</span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>Opinionated secure defaults</span>
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