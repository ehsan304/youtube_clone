import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from'./components/Navbar';
import Feed from'./components/Feed';
import VideoDetail from'./components/VideoDetail';
import ChannelDetail from'./components/ChannelDetail';
import SearchFeed from'./components/SearchFeed';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';
import VideoCard from './components/VideoCard';
import ChannelCard from './components/ChannelCard';
import LoaderFile from './components/LoaderFile';
const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor:' #000'}}>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id' exact element={<VideoDetail />} />
                <Route path='/channel/:id' exact element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App