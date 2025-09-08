'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const codeSteps = [
  {
    title: "1. Import SDK",
    code: `import (
    client "github.com/TEENet-io/tee-dao-key-management-client/go"
)`,
    language: "go"
  },
  {
    title: "2. Initialize Client",
    code: `// Create client
client := client.NewClient("URL_TO_KEY_MANAGEMENT_SERVICE")
defer client.Close()

// Initialize client (fetch config + establish TLS connection)
if err := client.Init(nil); err != nil { 
    log.Fatalf("Initialization failed: %v", err)
}`,
    language: "go"
  },
  {
    title: "3. Sign with SDK",
    code: `signature, err := client.SignWithAppID(message, appID)
if err != nil {
    log.Printf("Signing with App ID failed: %v", err)
} else {
    fmt.Printf("Signing with App ID successful!\\n")
    fmt.Printf("Message: %s\\n", string(message))
    fmt.Printf("Signature: %x\\n", signature)
}`,
    language: "go"
  }
];

const renderGoCode = (line: string) => {
  if (line.trim() === '') {
    return <span>&nbsp;</span>;
  }

  // Preserve leading whitespace
  const leadingWhitespace = line.match(/^\s*/)?.[0] || '';
  const trimmedLine = line.trim();

  if (trimmedLine.includes('import')) {
    return (
      <span>
        {leadingWhitespace}
        <span className="text-purple-400">import</span>
        <span className="text-yellow-300"> (</span>
      </span>
    );
  }

  if (trimmedLine.startsWith('client "')) {
    return (
      <span>
        {leadingWhitespace}
        <span className="text-gray-400">client</span>
        <span className="text-green-400"> &quot;github.com/TEENet-io/tee-dao-key-management-client/go&quot;</span>
      </span>
    );
  }

  if (trimmedLine === ')') {
    return (
      <span>
        {leadingWhitespace}
        <span className="text-yellow-300">)</span>
      </span>
    );
  }

  if (trimmedLine.startsWith('//')) {
    return <span className="text-gray-500">{line}</span>;
  }

  if (trimmedLine.includes(':=')) {
    const parts = trimmedLine.split(':=');
    return (
      <span>
        {leadingWhitespace}
        <span className="text-blue-400">{parts[0].trim()}</span>
        <span className="text-yellow-300"> := </span>
        <span className="text-green-400">{parts[1].trim()}</span>
      </span>
    );
  }

  if (trimmedLine.startsWith('defer')) {
    return (
      <span>
        {leadingWhitespace}
        <span className="text-purple-400">defer </span>
        <span className="text-blue-400">{trimmedLine.replace('defer ', '')}</span>
      </span>
    );
  }

  if (trimmedLine.startsWith('if') && trimmedLine.includes('err')) {
    return (
      <span>
        {leadingWhitespace}
        <span className="text-purple-400">if </span>
        <span className="text-blue-400">err</span>
        <span className="text-yellow-300"> := </span>
        <span className="text-green-400">{trimmedLine.split(':=')[1]?.trim()}</span>
        <span className="text-yellow-300">; </span>
        <span className="text-blue-400">err</span>
        <span className="text-yellow-300"> != </span>
        <span className="text-purple-400">nil</span>
        <span className="text-yellow-300"> {'{'} </span>
      </span>
    );
  }

  if (trimmedLine.includes('log.')) {
    const parts = trimmedLine.split('log.');
    return (
      <span>
        {leadingWhitespace}
        <span className="text-blue-400">log</span>
        <span className="text-yellow-300">.</span>
        <span className="text-green-400">{parts[1]}</span>
      </span>
    );
  }

  if (trimmedLine.includes('fmt.')) {
    const parts = trimmedLine.split('fmt.');
    return (
      <span>
        {leadingWhitespace}
        <span className="text-blue-400">fmt</span>
        <span className="text-yellow-300">.</span>
        <span className="text-green-400">{parts[1]}</span>
      </span>
    );
  }

  if (trimmedLine === '} else {') {
    return (
      <span>
        {leadingWhitespace}
        <span className="text-yellow-300">{'} else {'}</span>
      </span>
    );
  }

  if (trimmedLine === '}') {
    return (
      <span>
        {leadingWhitespace}
        <span className="text-yellow-300">{'}'}</span>
      </span>
    );
  }

  // Default case - return the line with preserved whitespace
  return <span className="text-gray-300">{line}</span>;
};

export default function SDKAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= codeSteps.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handlePlay = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const handleStepClick = (index: number) => {
    setIsPlaying(false);
    setCurrentStep(index);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {/* VSCode-like header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-sm text-gray-600 ml-4">main.go</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePlay}
            disabled={isPlaying}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPlaying ? 'Playing...' : 'Play Demo'}
          </button>
        </div>
      </div>

      {/* Step indicators */}
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
        <div className="flex space-x-4">
          {codeSteps.map((step, index) => (
            <button
              key={index}
              onClick={() => handleStepClick(index)}
              className={`text-sm px-2 py-1 rounded transition-colors ${
                currentStep === index
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {step.title}
            </button>
          ))}
        </div>
      </div>

      {/* Code editor area */}
      <div className="bg-gray-900 text-gray-100 p-4 font-mono text-xs leading-5 relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-1"
          >
            {codeSteps[currentStep].code.split('\n').map((line, lineIndex) => (
              <motion.div
                key={lineIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: lineIndex * 0.1,
                  ease: "easeOut"
                }}
                className="flex items-start"
              >
                <span className="text-gray-500 mr-3 text-right w-6 select-none">
                  {lineIndex + 1}
                </span>
                <div className="flex-1 font-mono whitespace-pre">
                  {renderGoCode(line)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="absolute bottom-4 right-4">
          <div className="flex space-x-1">
            {codeSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index <= currentStep ? 'bg-blue-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Description area */}
      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h4 className="font-semibold text-gray-900 mb-2">
            {codeSteps[currentStep].title}
          </h4>
          <p className="text-sm text-gray-600">
            {currentStep === 0 && "Import the TEENet SDK client package into your Go application."}
            {currentStep === 1 && "Create and initialize the client with your key management service URL."}
            {currentStep === 2 && "Use the SDK to securely sign messages with your application ID."}
          </p>
        </motion.div>
      </div>
    </div>
  );
}