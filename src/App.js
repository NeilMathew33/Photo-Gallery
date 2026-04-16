import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllPhotos from './Components/ViewAllPhotos';
import AddPhotoEntry from './AddPhotoEntry';
import PhotoNavbar from './Components/PhotoNavbar';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Add" element={<AddPhotoEntry />} />
      <Route path="/ViewAll" element={<ViewAllPhotos />} />
      <Route path="/" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
