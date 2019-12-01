import * as React from "react";

interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

const CategoryRow = (props: { category: string }) => (
  <tr>
    <th colSpan="2">{props.category}</th>
  </tr>
);

const ProductRow = (props: { product: Product }) => (
  <tr>
    <td>{props.product.name}</td>
    <td>{props.product.price}</td>
  </tr>
);

class ProductTable extends React.Component {
  readonly props: {
    products: Product[];
    filterText: string;
    isStockedOnly: boolean;
  };

  public render(): any {
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach(p => {
      if (
        p.name.indexOf(this.props.filterText) === -1 ||
        (!p.stocked && this.props.isStockedOnly)
      ) {
        return;
      }
      if (p.category !== lastCategory) {
        rows.push(<CategoryRow key={p.category} category={p.category} />);
      }
      rows.push(<ProductRow key={p.name} product={p} />);
      lastCategory = p.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  readonly props: {
    filterText: string;
    isStockedOnly: boolean;
    onFilterTextChange: Function;
    onIsStockedOnlyChange: Function;
  };

  private changeHandler(e): void {
    const type = e.target.type;
    const isTextChanged = type === "text";
    const value = isTextChanged ? e.target.value : e.target.checked;
    if (isTextChanged) {
      this.props.onFilterTextChange(value);
    } else {
      this.props.onIsStockedOnlyChange(value);
    }
  }

  public render(): any {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          value={this.props.filterText}
          onChange={this.changeHandler.bind(this)}
        />{" "}
        <br />
        <input
          type="checkbox"
          checked={this.props.isStockedOnly}
          onChange={this.changeHandler.bind(this)}
        />
        <span>Only show products in stock.</span>
      </div>
    );
  }
}

export class FilterableProductTable extends React.Component {
  readonly props: { products: Product[] };
  readonly state: { filterText: string; isStockedOnly: boolean };

  constructor(props) {
    super(props);
    this.state = { filterText: "", isStockedOnly: false };
  }

  private filterTextChangeHandler(filterText: string): void {
    this.setState({ filterText });
  }

  private isStockedOnlyChangeHandler(isStockedOnly: boolean): void {
    this.setState({ isStockedOnly });
  }

  public render(): any {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          isStockedOnly={this.state.isStockedOnly}
          onFilterTextChange={this.filterTextChangeHandler.bind(this)}
          onIsStockedOnlyChange={this.isStockedOnlyChangeHandler.bind(this)}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          isStockedOnly={this.state.isStockedOnly}
        />
      </div>
    );
  }
}
