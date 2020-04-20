import { mount } from "@vue/test-utils";
import Select from "./select";
import { Select as AntdSelect } from "ant-design-vue";

describe("Select", () => {
  it("should render a option", async () => {
    const wrapper = mount(Select);

    await wrapper.vm.$nextTick();
    const options = wrapper.findAll("[data-testid=option]");
    await wrapper.vm.$nextTick();
    expect(options.length).toBe(1);
  });
});
