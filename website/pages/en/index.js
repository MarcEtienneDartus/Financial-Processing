/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/undraw_teaching.svg`} /> */}
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('intro-signal-treatment.html')}>Cours</Button>
            <Button href={docUrl('python-setup.html')}>Applications</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Courses = () => (
      <Block background="dark">
        {[
          {
            content:
              "Le but de ce cours, en tant que complément, n’est pas de s’attarder sur la partie théorique et « barbante » des différents concepts. Il vise plutôt au contraire à donner un sens et des illustrations aux notions de traitement du signal."
              + "\n\nPour donner ces illustrations, nous avons décidé de faire référence à la finance, un domaine ou le traitement du signal est très présent, et peut révéler beaucoup de choses intéressantes !"
            ,
            image: `${baseUrl}img/undraw_studying.svg`,
            imageAlign: 'right',
            title:  'Un résumé de l\'essentiel du cours',
          },
        ]}
      </Block>
    );

    const Applications = () => (
      <Block>
        {[
          {
            content: "Les applications permettent tout simplement d’exercer le traitement du signal sur des signaux financiers, sans plus se soucier des aspects techniques et théoriques de la matière."
              + "\n\nLes énoncés vous guideront sur l’utilisation de Python et ses libraires de traitement du signal. Python est un langage très abordable, très puissant, et de plus en plus présent dans beaucoup de domaines ingénieurs tel que la finance."
            ,
            image: `${baseUrl}img/undraw_researching.svg`,
            imageAlign: 'left',
            title:  'Des exercices appliqués en python',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Courses/>
          <Applications/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
