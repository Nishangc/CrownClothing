import React, { Component } from "react";
import SHOP_DATA from "./ShopData";
import CollectionPreview from "../../components/collectionpreview/CollectionPreview";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...othersCollectionProps }) => (
          <CollectionPreview key={id} {...othersCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
