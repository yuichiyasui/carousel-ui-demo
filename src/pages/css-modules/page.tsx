import { Navigation } from "~/ui/Navigation";
import { PageTitle } from "~/ui/PageTitle";

import { BasicCarousel } from "./BasicCarousel";
import { CarouselWithButton } from "./CarouselWithButton";
import styles from "./page.module.css";

export const CssModulesPage = () => {
  return (
    <main>
      <PageTitle className={styles["page-title"]}>CSS Modules</PageTitle>
      <Navigation className={styles["navigation"]} />

      <section className={styles["basic-section"]}>
        <h2 className={styles["section-title"]}>basic</h2>
        <BasicCarousel />
      </section>

      <section className={styles["with-button-section"]}>
        <h2 className={styles["section-title"]}>with button</h2>
        <CarouselWithButton />
      </section>
    </main>
  );
};
