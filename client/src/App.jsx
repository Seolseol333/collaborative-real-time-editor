import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RevisionProvider } from "./components/RevisionContext/RevisionContext";
import { theme } from "./theme";
import { EditorView } from "./views/EditorView/EditorView";
import { LoginView } from "./views/LoginView/LoginView";

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <RevisionProvider>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/editor/:name" element={<EditorView />} />
        </Routes>
      </RevisionProvider>
    </ThemeProvider>
  </BrowserRouter>
)