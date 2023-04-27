import { AppProvider, Frame, TopBar } from "@shopify/polaris";
import { Page } from "@shopify/polaris";
import PageExample from "../Todo/Todo";
function Header() {
  const userMenuMarkup = <TopBar.UserMenu name="HaiTN" initials="H" />;
  const topBarMarkup = <TopBar userMenu={userMenuMarkup} />;

  const logo = {
    width: 124,
    topBarSource:
      "https://s3-alpha-sig.figma.com/img/66f5/d160/93cd24e048cf62f7be519066a8949e25?Expires=1682899200&Signature=gANTfqP1NAKmd70CFrEMEB6RDawPYYmilFEPPHO0VJKN0lyRVD~dQsqxUbiSILUabl6OGnUZtrSjRVSIgZnmUWBIRryBLTbxQA0R5Nn~F4BEEQPE~rnxznMRVYCCRDsdtnJqio1ESysIopt-Hk0EOGbvUyFGGaA2te8GWNhQvyTdjTsVv-L-ZJ9JWXXFReoA5blc2sxJTiVqV98XnA7nXIL6~ZH6CT3Kx42Qg8IQfQjCs4L~Ea5Xy3CEMA8AJDcQhfFZxCE20UW5jlJNTYk2X1ny13De07Lfz7CRee-FVZjKEcZJ36HcjdG-4rUztIfEac9y92AkQn1Kz4gRySkIvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  };

  return (
    <div style={{ height: "40px" }}>
      <Frame logo={logo} topBar={topBarMarkup}></Frame>
    </div>
  );
}

export default Header;
