#!/usr/bin/env node
"use strict";

const fs = require("fs");
require("qcobjects");
const lang = "en";
const readme = fs.readFileSync("./README.md").toString();

const routings = [];

function writeContent (lang, index, content, level){
  let routingpath = content.split("\n")[0].split("# ")[1].toLowerCase().replace(/\s/g,"-").replace(":","");
  // eslint-disable-next-line no-useless-escape
  routingpath = routingpath.replace("\(","").replace("\)","");
  routingpath = routingpath.replace(/(á|é|í|ó|ú)/g,"");
  routingpath = routingpath.replace(".","");
  routingpath = encodeURI(routingpath);
  const rtext = `\t<routing path="^/${routingpath}$" name="markdown/${lang}/page_${lang}_${index}"></routing>`;

  routings.push(rtext);
  fs.writeFileSync(`./src/templates/components/markdown/${lang}/page_${lang}_${index}.md`,`${content}`);
}

readme.split("\n# ").map ((content, index1) => writeContent(lang, `${index1}`, `# ${content}` , 1));
readme.split("\n# ").map( (content1, index1) => content1.split("\n\#\# ").map ((content, index2) => writeContent(lang, `${index1}_${index2}`, `## ${content}`,2 )  )  );
readme.split("\n# ").map( (content1, index1) => content1.split("\n\#\# ").map( (content2, index2) => content2.split( "\n\#\#\# " ).map ((content, index3) => writeContent(lang, `${index1}_${index2}_${index3}`, `### ${content}` , 3 ) )  ) );
readme.split("\n# ").map( (content1, index1) => content1.split("\n\#\# ").map( (content2, index2) => content2.split( "\n\#\#\# " ).map( (content3, index3) => content3.split("\n\#\#\#\# ").map ((content, index4) => writeContent(lang, `${index1}_${index2}_${index3}_${index4}`, `#### ${content}` , 4 ) )  ) ) );

let sectionTemplate = `
<style>
@import url('./css/github-style.css');
@import url('./css/snippet.css');

  /* If you use shadowed=true
  This style will be automatically shadowed in the browser */
  article {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(228, 228, 234, 0.5) 0px 9px 23px 0px;
    transition: all 0.3s ease-in-out;
    width: 100%;
    margin: 0 auto;
    min-height: 100%;
    height: auto;
    border-radius: 30px;
    display: block;
    padding: 3%;
    background-color: #ffffff;
  }


  a{
    /* These are technically the same, but use both */
    overflow-wrap: break-word;
    word-wrap: break-word;

    -ms-word-break: break-all;
    /* This is the dangerous one in WebKit, as it breaks things wherever */
    word-break: break-all;
    /* Instead use this non-standard one: */
    word-break: break-word;

    /* Adds a hyphen where the word breaks, if supported (No Blink) */
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }
  p:not(:first-child) {
    margin: 1% 5%;
    font-size: medium;
    display: block;
  }
  h1, h2 {
    margin: 2% 3%;
  }
  ul {
    margin: auto 4%;
  }
</style>

</style>
<article>
  <component name="blank" tplextension="md" componentClass="MarkdownComponent" controllerClass="MarkdownController">
    <routing path="^/author$" name="markdown/en/AUTHOR" ></routing>
{{routings}}
    <routing path="^/$" name="markdown/en/page_en_1" ></routing>
    <routing path="^$" name="markdown/en/page_en_1" ></routing>
  </component>

</article>

`;
sectionTemplate = sectionTemplate.replace(/{{routings}}/g, routings.join("\n"));
fs.writeFileSync("./src/templates/components/section1.tpl.html",`${sectionTemplate}`);
