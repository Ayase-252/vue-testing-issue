import { Select } from "ant-design-vue";
import Vue from "vue";

Vue.use(Select);

export default {
  template: `
    <a-select defaultValue="unlimit">
      <a-select-option value="unlimit" data-testid="option">ulimit</a-select-option>
    </a-select>
  `,
};
