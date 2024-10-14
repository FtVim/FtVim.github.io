/**
 * Copyright (c) Ftvim Organization.
 */

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
              to={useBaseUrl("docs/")}
            >
              Get Started&nbsp;&nbsp;→
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
