import { Select } from "ant-design-vue";
import Vue from "vue";
import { render, fireEvent, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom/extend-expect";

Vue.use(Select);

const TestComp = Vue.extend({
  template: `<div>
    <a-select defaultValue="a">
      <a-select-option value="a">a</a-select-option>
      <a-select-option value="b">b</a-select-option>
    </a-select>
  </div>`,
});

describe("TestComp", () => {
  it("should open menu", (done) => {
    const { getByText } = render(TestComp);

    fireEvent.click(getByText("a"));

    waitFor(() => expect(getByText("b")).toBeVisible())
      .then(() => {
        fireEvent.click(getByText("b"));
        return waitFor(() => expect(getByText("a")).not.toBeVisible());
      })
      .then(() => {
        done();
      });
  });
});
