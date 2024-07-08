'use client';

import { useState } from 'react';

import Portfolio from './portfolio';
import Prediction from './prediction';

const Panel = () => {
  const [initial, setInitial] = useState(1000);

  return (
    <div className="inline-flex flex-col divide-y divide-lightgrey rounded-lg border border-lightgrey bg-obsidian md:flex-row md:divide-x">
      <Portfolio initial={initial} setInitial={setInitial} />
      <Prediction />
    </div>
  );
};

export default Panel;
