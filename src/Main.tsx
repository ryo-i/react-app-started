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
const domain = data.info.domain;
const ogpImg = data.info.ogpImg;
const tw = data.info.tw;
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
                { name: 'description', content: mainText },
                { property: 'og:title', content: mainTitle },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: domain + homeUrl + '/' },
                { property: 'og:image', content: domain + homeUrl + '/ogp.png' },
                { property: 'og:description', content: mainText },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:image', content: domain + homeUrl + '/ogp.png'},
                { name: 'twitter:site', content: tw },
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
                { name: 'description', content: aboutText },
                { property: 'og:title', content: aboutTitle },
                { property: 'og:type', content: 'article' },
                { property: 'og:url', content: domain + homeUrl + '/about' },
                { property: 'og:image', content: domain + homeUrl + '/ogp.png' },
                { property: 'og:description', content: aboutText },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:image', content: domain + homeUrl + '/ogp.png'},
                { name: 'twitter:site', content: tw },
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
