/**
 * Copyright (c) Ftvim Organization.
 */

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig } = context;

  return (
    <Layout
      title={siteConfig.title}
      description="An aesthetic and feature-rich neovim config that is extensible and easy to use with a great set of plugins"
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, "margin-vert--md")}
            src={useBaseUrl("img/logo.png")}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStarted,
              )}
              to={useBaseUrl("docs/getting-started/introduction")}
            >
              Get Started&nbsp;&nbsp;→
            </Link>
          </div>
        </div>
      </header>
      <main>
        <p className="padding-vert--xl">
          <p className="container">
            <p className="row">
              <p className="col col--10 col--offset-1">
                <h2 className="text--center margin-bottom--xl">Why Ftvim?</h2>
                <div className="row margin-vert--lg">
                  <div className="col">
                    <h3>Theming</h3>
                    <p>
                      Create websites with built-in support for theming and dark
                      mode! Try the toggle at the top!
                    </p>
                  </div>
                  <div className="col">
                    <h3>Modern</h3>
                    <p>
                      Built using modern CSS approaches - CSS variables and
                      Postcss, BEM naming.
                    </p>
                  </div>
                  <div className="col">
                    <h3>Modular</h3>
                    <p>
                      Just import the CSS for the components which you need.
                    </p>
                  </div>
                </div>
                <div className="row margin-vert--lg">
                  <div className="col">
                    <h3>100% Responsive</h3>
                    <p>Works on all devices and viewport widths.</p>
                  </div>
                  <div className="col">
                    <h3>View library-agnostic</h3>
                    <p>
                      It's just CSS, so it works with React, Vue, Angular,
                      anything!
                    </p>
                  </div>
                </div>
              </p>
            </p>
          </p>
        </p>
      </main>
    </Layout>
  );
}

export default Home;
