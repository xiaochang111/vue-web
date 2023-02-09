import { buildProps } from "@/utils/props";
import { EmitFn } from "@/utils/emits";
import { PropType, ExtractPropTypes } from "vue";
import { IconInstance } from "element-plus";
import { isBoolean } from "lodash-es";

export interface Menu {
  title: string;
  path: string;
  icon?: IconInstance;
  children: Menu[];
}

// 组件props参数类型
export const menuItemProps = buildProps({
  menu: {
    default: () => ({
      title: "",
      path: "",
      children: [],
    }),
    type: Object as PropType<Menu>,
  },
} as const);

export type MenuProps = ExtractPropTypes<typeof menuItemProps>;

// 组件emit回调方法类型
export const menuItemEmit = {};

export type menuItemEmits = EmitFn<typeof menuItemEmit>;
