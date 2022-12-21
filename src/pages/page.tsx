import { clsx } from "clsx";

import { Navigation } from "~/ui/Navigation";
import { PageTitle } from "~/ui/PageTitle";

export const TopPage = () => {
  return (
    <main>
      <PageTitle className="mb-4">Carousel UI Demo</PageTitle>
      <Navigation className={clsx("mx-auto", "mb-6")} />
      <p className="text-center">
        Please select example from above navigation.
      </p>
    </main>
  );
};
