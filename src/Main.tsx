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
const data = Data.data;
const mainTitle = data.main.title;
const mainText = data.main.text;
const aboutTitle = data.about.title;
const aboutText = data.about.text;
const homeUrl = process.env.PUBLIC_URL; // Routing


// Style
const SectionTag = styled.section`
  ${pageSize}
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
    color: ${variable.baseColor};
  }
`;


// Component
function Main() {
  return (
    <main>
      <SectionTag>
        <Switch>
          <Route exact path={ homeUrl + "/" }>
            <Helmet
              title={ mainTitle }
              meta={[
                { name: 'description', content: mainText }
              ]}
            />
            <h1>{ mainTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: mainText }}></p>
            <Inner />
          </Route>
          <Route path={ homeUrl + "/about" }>
            <Helmet
              title={ aboutTitle }
              meta={[
                { name: 'description', content: aboutText }
              ]}
            />
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
