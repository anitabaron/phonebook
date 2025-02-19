import { Helmet } from "react-helmet-async";
import { DocumentTitleProps } from "src/types/types";

export default function DocumentTitle({ children }: DocumentTitleProps) {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
}
