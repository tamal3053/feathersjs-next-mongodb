import React from "react";
import AppContext from '../store/AppContext';
import {LAYOUT} from '../store/Actions';
import Menu from '../compontents/Menu';

export default () => {
  const {state, dispatch} = React.useContext(AppContext);
  const layout = state[LAYOUT];

  return <div>
    <Menu/>
    <p>About us Page {layout.theme}</p>
  </div>;
}
