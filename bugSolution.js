```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        {/* ... more routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  // Extract parameter from the path here
  let { pathname } = useLocation();
  let path = pathname.substring('/about/'.length) //Extract the path after '/about/' 
  return (
    <div>
      <h1>About</h1>
      <p> Path : {path} </p>
    </div>  );
}

export default App;
```