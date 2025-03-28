import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LanguageContextProvider } from "./contexts/LanguageContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </LanguageContextProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
