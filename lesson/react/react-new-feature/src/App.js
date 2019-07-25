import React from 'react';
import ConcurrentModeDemo from './ConcurrentMode/index'
import StateHook from './hook/stateHook'
import ForHook from './hook/ForHook'
import EffectHookDemo from './hook/effectHook'
import ReducerHookDemo from './hook/ReducerHook'
import './App.css';

function App() {
  return (
    <div>
      {/* <ConcurrentModeDemo /> */}
      <StateHook />
      <ForHook />
      EffectHookDemo:
      <EffectHookDemo />
      ReducerHookDemo:
      <ReducerHookDemo />
    </div>
  );
}

export default App;
