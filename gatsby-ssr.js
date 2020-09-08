// Requiring function causes error during builds
// as the code tries to reference window
const module = require("module") // Error

// Wrap the require in check for window
if (typeof window !== `undefined`) {
  const module = require("module")
}
