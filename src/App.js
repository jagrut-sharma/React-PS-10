import { Routes, Route } from "react-router-dom";

import "./styles.css";
import Header from "./components/Header";
import Inbox from "./pages/Inbox";
import Spam from "./pages/Spam";
import Trash from "./pages/Trash";
import ExpandedMail from "./pages/ExpandedMail";

export default function App() {
  return (
    <div className="App">
      <h1>Electronic Chitthi</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/inbox/:mailID" element={<ExpandedMail />} />
      </Routes>
    </div>
  );
}
