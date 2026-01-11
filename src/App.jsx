// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './HomePage/HomePage.jsx';
import Documentation from './Documentation/Documentation.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/docs" element={<Documentation />} />
      </Routes>
    </Router>
  );
}

export default App;
