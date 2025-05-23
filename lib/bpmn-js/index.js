import elements from "./elements.js";

export default {
  ...elements,

  // importer
  "element {element} referenced by {referenced}#{property} not yet drawn": "元素 {element} 的引用 {referenced}#{property} 尚未绘制",
  "unknown di {di} for element {semantic}": "未知的 di {di} 对于元素 {semantic}",
  "{semantic}#{side} Ref not specified": "{semantic}#{side} Ref 未指定",
  "already rendered {element}": "{element} 已呈现",
  "failed to import {element}": "{element} 导入失败",
  "multiple DI elements defined for {element}": "为 {element} 定义了多个 DI 元素",
  "no bpmnElement referenced in {element}": "{element} 中没有引用 bpmnElement",
  "diagram not part of bpmn:Definitions": "图表不是 bpmn:Definitions 的一部分",
  "no diagram to display": "没有要显示的图表",
  "no process or collaboration to display": "没有可显示的流程或协作",
  "correcting missing bpmnElement on {plane} to {rootElement}": "在 {plane} 上更正缺失的 bpmnElement 为 {rootElement}",
  "unsupported bpmnElement for {plane}: {rootElement}": "不支持的 bpmnElement 元素 {plane}: {rootElement}",
  "unrecognized flowElement {element} in context {context}": "在上下文 {context} 中未识别的 flowElement {element}",
  "missing {semantic}#attachedToRef": "在 {element} 中缺少 {semantic}#attachedToRef",

  // context-pad align provider
  "Align elements": "对齐元素",
  "Align elements left": "靠左对齐",
  "Align elements right": "靠右对齐",
  "Align elements top": "靠上对齐",
  "Align elements bottom": "靠下对齐",
  "Align elements center": "垂直居中对齐",
  "Align elements middle": "水平居中对齐",

  // context-pad provider
  "Remove": "移除元素",
  "Delete": "移除元素",
  "Add lane above": "添加到通道之上",
  "Divide into three lanes": "分成三条通道",
  "Divide into two lanes": "分成两条通道",
  "Add lane below": "添加到通道之下",
  "Append receive task": "添加接收任务",
  "Append task": "添加任务",
  "Append gateway": "添加网关",
  "Append end event": "添加结束事件",
  "Append compensation activity": "追加补偿活动",
  "Append conditional intermediate catch event": "添加中间条件捕获事件",
  "Append intermediate/boundary event": "添加中间/边界事件",
  "Append message intermediate catch event": "添加消息中间捕获事件",
  "Append signal intermediate catch event": "添加信号中间捕获事件",
  "Append timer intermediate catch event": "添加定时器中间捕获事件",
  "Append text annotation": "添加文本注解",
  'Add text annotation': '添加文本注释',
  'Connect to other element': '连接到其他元素',
  "Change type": "更改类型",
  "Change element": "更改元素",
  "Connect using association": "文本关联",
  "Connect using data input association": "数据关联",
  "Connect using sequence/message flow or association": "消息关联",

  // distribute
  "Distribute elements horizontally": "水平分布",
  "Distribute elements vertically": "垂直分布",

  // modeling
  "out of bounds release": "越界释放",
  "no shape type specified": "未指定形状类型",
  "more than {count} child lanes": "超过 {count} 条通道",
  "element required": "需要元素",

  // palette
  "Activate create/remove space tool": "启动创建/删除空间工具",
  "Activate global connect tool": "启动全局连接工具",
  "Activate hand tool": "启动手动工具",
  "Activate lasso tool": "启动 Lasso 工具",
  "Create data object reference": "创建数据对象引用",
  "Create data store reference": "创建数据存储引用",
  "Create start event": "创建开始事件",
  "Create intermediate/boundary event": "创建中间/边界事件",
  "Create end event": "创建结束事件",
  "Create expanded sub-process": "创建可折叠子流程",
  "Create gateway": "创建网关",
  "Create task": "创建任务",
  "Create group": "创建组",
  "Create pool/participant": "创建池/参与者",

  // replace
  "Parallel multi-instance": "并行多实例",
  "Sequential multi-instance": "串行多实例",
  "Participant multiplicity": "参与者多重性",
  "Loop": "循环",
  "Collection": "集合",
  "Ad-hoc": "Ad-hoc子流程",
  "Toggle non-interrupting": "切换非中断",
  "Toggle interrupting": "切换中断",

  // create anything
  "Create Element": "创建元素",
  "Append Element": "添加元素",
  "Templates": "模板",

  // other
  "no parent for {element} in {parent}": "在 {element} 中没有父元素 {parent}",
  "flow elements must be children of pools/participants": "元素必须是池/参与者的子级",
};
