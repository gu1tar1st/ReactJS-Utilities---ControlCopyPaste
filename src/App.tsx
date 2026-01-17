import { Routes, Route } from 'react-router';
import { Home } from './pages/Home';
import { ConnectToMongoDB } from './pages/ConnectToMongoDB';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/connect-to-mongodb" element={<ConnectToMongoDB />}></Route>
      </Routes>
    </>
  )
}

export default App
