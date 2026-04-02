import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllPhotos from './Components/ViewAllPhotos';
import AddPhotoEntry from './AddPhotoEntry';
import PhotoNavbar from './Components/PhotoNavbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddPhotoEntry />} />
      <Route path="/ViewAll" element={<ViewAllPhotos />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
