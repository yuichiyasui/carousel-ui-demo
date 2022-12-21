import { clsx } from "clsx";

import { Navigation } from "~/ui/Navigation";
import { PageTitle } from "~/ui/PageTitle";

export const TailwindCssPage = () => {
  return (
    <main>
      <PageTitle className="mb-4">TailwindCSS</PageTitle>
      <Navigation className={clsx("mx-auto", "mb-6")} />
    </main>
  );
};
