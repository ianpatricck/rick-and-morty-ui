import { Route, Routes } from "react-router";
import Home from "@/pages/Home";
import PageNotFound from "@/pages/PageNotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
