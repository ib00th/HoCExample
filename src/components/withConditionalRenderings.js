import React from "react";
import { compose } from "recompose";

import withMaybe from "./withMaybe";
import withEither from "./withEither";

const EmptyMessage = () => (
  <div>
    <p>You have no Todos.</p>
  </div>
);

const LoadingIndicator = () => (
  <div>
    <p>Loading todos ...</p>
  </div>
);

const isLoadingConditionFn = props => props.isLoadingTodos;
const nullConditionFn = props => !props.todos;
const isEmptyConditionFn = props => !props.todos.length;

const withConditionalRenderings = compose(
  withEither(isLoadingConditionFn, LoadingIndicator),
  withMaybe(nullConditionFn),
  withEither(isEmptyConditionFn, EmptyMessage)
);

export default withConditionalRenderings;
