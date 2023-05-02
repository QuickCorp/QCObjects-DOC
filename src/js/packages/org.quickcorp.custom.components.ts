"use strict";

import { Package, Component } from "qcobjects";

Package("org.quickcorp.custom.components", [
  class GitHubGrid extends Component {
    name = "github-grid";
    tplsource = "inline";
    template = `
    <style>
    $layout(landscape,css/desktop/components/github-grid.css)
    $layout(portrait,css/mobile/components/github-grid.css)

    :host {
      margin:0 auto;
      justify-content: center;
    }
    </style>
      $mapper(github-card,result)
    `;
  },

  class DeployGrid extends Component {
    name = "deploy-grid";
    tplsource = "inline";
    template = `
    <style>
    $layout(landscape,css/desktop/components/deploy-grid.css)
    $layout(portrait,css/mobile/components/deploy-grid.css)
    .deploy-grid{
      display:inline-grid;
      justify-content: space-evenly;
      align-items: center;
      justify-items: stretch;
    }
    </style>
    <div class="deploy-grid">
      <aws-button effectClass=SlideLeftTransitionEffect apply-effect-to=observe></aws-button>
      <gitpod-button effectClass=SlideRightTransitionEffect apply-effect-to=observe></gitpod-button>
      <codespaces-button effectClass=SlideLeftTransitionEffect apply-effect-to=observe></codespaces-button>
      <netlify-button effectClass=SlideRightTransitionEffect apply-effect-to=observe></netlify-button>
      <github-button effectClass=SlideLeftTransitionEffect apply-effect-to=observe></github-button>
    </div>
    `;
  },

  class DocGrid extends Component {
    name = "doc-grid";
    tplsource = "inline";
    template = `
    <style>
    $layout(landscape,css/desktop/components/doc-grid.css)
    $layout(portrait,css/mobile/components/doc-grid.css)
    .doc-grid{
      display:inline-grid;
      justify-content: space-evenly;
      align-items: center;
      justify-items: stretch;
    }
    quick-component[name=card]{
      cursor:pointer;
    }
    </style>
    <div class="doc-grid">
    <quick-component onclick="location.href='/essentials'" 
      name="card" data-image="qcobjects-essentials.png" 
      data-title="Essentials" 
      data-description="Basic elements, reference & more"></quick-component>
    <quick-component onclick="location.href='/installing'" 
      name="card" data-image="installing-qcobjects.png" 
      data-title="Installing" 
      data-description="All the ways possible to install it"></quick-component>
    <quick-component onclick="location.href='/the-qcobjects-http2-built-in-server'" 
      name="card" data-image="qcobjects-cli.png" 
      data-title="CLI Tool & Back-End Server" 
      data-description="Commands and options"></quick-component>
    </div>
    `;
  }

  
]);
