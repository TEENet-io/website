# SDK Animation

## Objective
I want to create an engaging and informative animation that demonstrates how to use the SDK effectively. The animation should highlight how efficiently the SDK can be integrated into project code.

## Stack
- React
- Framer Motion
- Lottie

## Style
- VSCode light theme

## Contents
1. import of the SDK in golang
```go
import (
    sdk "github.com/TEENet-io/tee-dao-key-management-client/go"
)
```
2. Initialize the SDK
```go
// Create client
client := sdk.NewClient("URL_TO_KEY_MANAGEMENT_SERVICE")
defer client.Close()

// Initialize client (fetch config + establish TLS connection)
if err := client.Init(nil); err != nil { 
    log.Fatalf("Initialization failed: %v", err)
}
```
3. Use the SDK to sign 
```go
signature, err := client.Sign(signingHash, appID)
if err != nil {
    log.Printf("Signing with App ID failed: %v", err)
} else {
    fmt.Printf("Signing with App ID successful!\n")
    fmt.Printf("Message: %s\n", string(message))
    fmt.Printf("Signature: %x\n", signature)
}
```