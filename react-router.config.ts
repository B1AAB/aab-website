import type { Config } from "@react-router/dev/config";

export default {
  // invalidates the need for a server, creating a pure "Single Page App"
  // which is exactly what GitHub Pages needs.
  ssr: false, 
  
  // Tells the router it is living in a subdirectory
  basename: "/aab-website/", 
} satisfies Config;