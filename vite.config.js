import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";
import { handleRegistration } from "./api/_lib/zoomRegister.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Runs the webinar registration (POST /api/zoom-register) inside `npm run dev`
// and `npm run preview`, so the form registers people directly in Zoom locally.
// Zoom details are read from .env.local (never committed to GitHub).
function zoomRegisterApi() {
  const middleware = async (req, res, next) => {
    if ((req.url || "").split("?")[0] !== "/api/zoom-register") return next();
    if (req.method !== "POST") {
      res.statusCode = 405;
      return res.end();
    }
    let raw = "";
    for await (const chunk of req) raw += chunk;
    let body = {};
    try { body = JSON.parse(raw || "{}"); } catch { body = {}; }
    const { status, json } = await handleRegistration(body);
    res.statusCode = status;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(json));
  };
  return {
    name: "zoom-register-api",
    configureServer(server) { server.middlewares.use(middleware); },
    configurePreviewServer(server) { server.middlewares.use(middleware); },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Make ZOOM_* values from .env.local available to the registration code.
  Object.assign(process.env, loadEnv(mode, __dirname, "ZOOM_"));

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), zoomRegisterApi(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});