import * as React from "react";
import { TodoList } from "./demo/dsc/todo-list";
// import { Clock } from "./demo/clock";
import { LoginControl } from "./demo/login";
import { InfoForm } from "./demo/form";
import { Calculator } from "./demo/temperature";
import { FilterableProductTable } from "./demo/product";
import { FlexExample } from "./demo/layout";

const fakeProducts = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

export class Tester extends React.Component {
  public render(): any {
    return (
      <div>
        <h1>Test component here.</h1>
        <TodoList />
        <LoginControl /> <br />
        <InfoForm />
        <Calculator />
        <hr />
        <FilterableProductTable products={fakeProducts} />
        <FlexExample />
      </div>
    );
  }
}
