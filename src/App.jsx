// The app shell. Three regions, and you build all three:
//
//   <Toolbar />      pick the active tool          -> components/Toolbar.jsx
//   <CanvasStage />  the <svg> that owns pointers  -> components/CanvasStage.jsx
//   <StatusBar />    save state + undo depth       -> components/StatusBar.jsx (day 3)
//

import CanvasStage from "./components/CanvasStage";
import Toolbar from "./components/Toolbar";

// Replace each placeholder as that component lands.
export default function App() {
  return (
    <div className="app">
      <header className="toolbar">
        <Toolbar />
      </header>

      <main className="stage">
        <CanvasStage />
      </main>

      <footer className="statusbar">
        <span className="placeholder">StatusBar goes here (day 3)</span>
      </footer>
    </div>
  )
}
