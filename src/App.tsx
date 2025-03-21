import { Route, Routes } from "react-router";
import Home from "@/pages/Home";
import PageNotFound from "@/pages/PageNotFound";
import Character from "@/pages/Character";

// Entrypoint do projeto, o componente principal.
export default function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/character/:id" element={<Character />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
