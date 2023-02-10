export interface Menu {
  title: string;
  path: string;
  icon?: string;
  children?: Menu[];
}

// 组件props参数类型
// export const menuItemProps = buildProps({
//   menu: {
//     default: () => ({
//       title: "",
//       path: "",
//       children: [],
//     }),
//     type: Object as PropType<Menu>,
//   },
// } as const);

// export type MenuProps = ExtractPropTypes<typeof menuItemProps>;

// // 组件emit回调方法类型
// export const menuItemEmit = {};

// export type menuItemEmits = EmitFn<typeof menuItemEmit>;
