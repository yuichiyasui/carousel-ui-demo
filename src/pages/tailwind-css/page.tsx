import { Navigation } from "~/ui/Navigation";
import { PageTitle } from "~/ui/PageTitle";

export const TailwindCssPage = () => {
  return (
    <main>
      <PageTitle className="mb-4">TailwindCSS</PageTitle>
      <Navigation className="mx-auto mb-6" />
    </main>
  );
};
