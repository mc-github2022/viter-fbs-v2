import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import WordPressBanner from "./WordPressBanner";
import WordPressOverview from "./WordPressOverview";
import WordPressScope from "./WordPressScope";
import WordPressPricing from "./WordPressPricing";
import WordPressPartners from "./WordPressPartners";
import WordPressPartnersSay from "./WordPressPartnersSay";
import WordPressPortfolio from "./WordPressPortfolio";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../../partials/PageNotFound";

const WordPressPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("Wordpress");
  const id = getUrlParam().get("id");

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category", // key
    {},
    null,
    true
  );

  const { data: wordpressTitlesData } = useQueryData(
    `${apiVersion}/wordpress-titles`, // endpoint
    "get", // method
    "wordpress-titles", // key
    {},
    null,
    true
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "web-wordpress";

  if (isLoading || !packagesCategoryData) {
    return <FetchingSpinner />;
  }

  const matchingItem = packagesCategoryData.data.find(
    (item) =>
      item.packages_category_url === categoryUrl &&
      String(item.packages_category_aid) === String(id)
  );

  if (!matchingItem) {
    return <PageNotFound />;
  }

  return (
    <>
      <Header pageName={pageName} services={"web services"} page={"WordPress CMS Website"} />
      <WordPressBanner pageName={pageName} />
      <WordPressOverview pageName={pageName} />
      <WordPressScope
        pageName={pageName}
        wordpressTitlesData={wordpressTitlesData}
      />
      <WordPressPricing
        pageName={pageName}
        wordpressTitlesData={wordpressTitlesData}
      />
      <WordPressPortfolio wordpressTitlesData={wordpressTitlesData}/>
      <WordPressPartners wordpressTitlesData={wordpressTitlesData} />
      <WordPressPartnersSay wordpressTitlesData={wordpressTitlesData} />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default WordPressPage;
