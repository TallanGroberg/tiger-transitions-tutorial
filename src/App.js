import React from 'react';
import logo from './logo.svg';
import './App.css';
import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route, Screen, Link, glide, fade, glueOut } from "react-tiger-transition";
import DownTheStreet from './DownTheStreet';

function App() {
  return (
    <Navigation>
      <Route exact path='/'
        screen 
          screenProps={{style: {
                        ...screenStyle,
                          backgroundColor: "#A5817F"}
                            }}>
                              
                              <Link transition='glide-top' to="/outside"><h4>outside</h4></Link>
      </Route>
      <Route exact path='/outside'screen screenProps={{
          style: { backgroundColor: "#BDA3A1",
            ...screenStyle }}}>
              <Link transition='glueout-right' to='/down-the-street'><h4>Down the street</h4></Link>
          </Route>
          <Route exact path='/down-the-street'  screen screenProps={{
          style: { backgroundColor: "#6B4E4D",
            ...screenStyle }}}> 
            <DownTheStreet /> 
          </Route>
          <Route exact path='/around-the-corner'screen screenProps={{
          style: { backgroundColor: "",
            ...screenStyle }}}>
              <Link transition='default-fade' to='/'><h4>Back to home</h4></Link>
          </Route>
    </Navigation>
  );
}

glide({
  name: 'glide-bottom',
  direction: 'bottom'
});
glide({
  name: 'glide-top',
  direction: 'top'
});
glueOut({
  name: 'glueout-left'
})
glueOut({
  name: 'glueout-right',
  direction: 'right'
})
fade({
  name: "default-fade"
});

export const screenStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default App;
