import { useState } from 'react';
import { range } from './utils';
import { HIGHEST_BASTARD_ID, OPENSEA_BASE, IMAGE_BASE } from './utils/constants';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const initialLoad = 500;
  const loadCount = 100;

  const [indices, setIndices] = useState(range(initialLoad));

  const nextIndices = () => {
    setIndices(range(indices.length + loadCount).slice(0, HIGHEST_BASTARD_ID + 1));
  }

  return (
    <div className="container mx-auto px-8">
      <header className="flex justify-center w-full font-charriot text-header p-2">ALL BASTARDS</header>
      <InfiniteScroll
        className="flex flex-row flex-wrap justify-center"
        dataLength={indices.length}
        next={nextIndices}
        hasMore={indices.length < HIGHEST_BASTARD_ID + 1}
        loader={<div className="content-center">Loading...</div>}
      >
        {
          indices.map(index => (
            <div key={index} className="p-1">
              <a href={`${OPENSEA_BASE}/${index}`}>
                <img width="100px" src={`${IMAGE_BASE}/${index}.webp`} className="bastard-image" alt={`Bastard ${index}`} />
              </a>
            </div>
          ))
        }
      </InfiniteScroll>
    </div>
  );
}

export default App;
