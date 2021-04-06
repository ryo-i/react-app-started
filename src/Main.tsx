import React from 'react';
import { Helmet } from "react-helmet";
import Inner from './Inner';
import About from './About';
import Data from './data/data.json';
import styled from 'styled-components';
import { pageSize } from './style/mixin';
import cssVariables from './style/variables.json';
import {
  Switch,
  Route
} from 'react-router-dom'; // Routing


const variable = cssVariables.variable;
// const title = Data.data.header.title;
// const description = Data.data.header.text;
const mainTitle = Data.data.main.title;
const mainText = Data.data.main.text;
const aboutTitle = Data.data.about.title;
const aboutText = Data.data.about.text;
const homeUrl = process.env.PUBLIC_URL; // Routing


// Style
const SectionTag = styled.section`
  ${pageSize}
  section {
    margin: 0 0 20px;
  }
  h1 {
    margin: 0 0 10px;
    font-size: 1.5em;
  }
  h2 {
    margin: 0 0 5px;
    font-size: 1.25em;
    color: ${variable.baseColor};
  }
  p {
    margin: 0 0 10px;
  }
  ul {
    margin: 0 0 10px;
  }
`;


// Component
function Main() {
  return (
    <main>
      <SectionTag>
        <Switch>
          <Route exact path={ homeUrl + "/" }>
            <Helmet>
              <title>{ mainTitle }</title>
              <meta name="description" content={ mainText } />
            </Helmet>
            <h1>{ mainTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: mainText }}></p>
            <Inner />
          </Route>
          <Route path={ homeUrl + "/about" }>
            <Helmet>
              <title>{ aboutTitle }</title>
              <meta name="description" content={ aboutText } />
            </Helmet>
            <h1>{ aboutTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: aboutText }}></p>
            <About />
          </Route>
        </Switch>
      </SectionTag>
    </main>
  );
}

export default Main;
