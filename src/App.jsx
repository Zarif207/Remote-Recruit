import Home from "./pages/Home";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  useSmoothScroll(); // silky ease-out scroll across the whole page
  return (
    <div className="w-full overflow-x-hidden">
      <Home />
    </div>
  );
}
