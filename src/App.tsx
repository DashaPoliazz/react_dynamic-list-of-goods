import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const setGoodByType = (promise: () => Promise<Good[]>) => {
    promise().then((goodsFromServer) => setGoods(goodsFromServer));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => setGoodByType(getAll)}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => setGoodByType(get5First)}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => setGoodByType(getRedGoods)}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};