/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    // const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + doc;
    // return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Cours</h5>
            <a href={this.docUrl('intro-signal-treatment.html', this.props.language)}>
              Intro au traitement du signal
            </a>
            <a href={this.docUrl('frequency-notion.html', this.props.language)}>
              Analyse Fréquentielle
            </a>
            <a href={this.docUrl('signal.html', this.props.language)}>
              Signaux Discrets
            </a>
            <a href={this.docUrl('filter-basics.html', this.props.language)}>
              Filtrage
            </a>
          </div>
          <div>
            <h5>Travaux pratiques</h5>
            <a href={this.docUrl('python-setup.html', this.props.language)}>
              Exercices de cours
            </a>
            <a href={this.docUrl('moving-average.html', this.props.language)}>
              Application des moyennes mobiles
            </a>
            <a href={this.docUrl('nasdaq.html', this.props.language)}>
              Application du Filtrage
            </a>
            <a href={this.docUrl('kalman-explication.html', this.props.language)}>
              Application de Kalman
            </a>
            <a href={this.docUrl('project.html', this.props.language)}>
              Projet
            </a>
          </div>
          <div>
            <h5>Informations</h5>
            <a href="https://github.com/MarcEtienneDartus/Financial-Processing">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
