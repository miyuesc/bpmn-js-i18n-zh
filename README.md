# bpmn-js-i18n-zh
 Chinese internationalization resources for bpmn-js

## Usage 

```
npm install bpmn-js-i18n-zh
```

```javascript
// custom translation module
import bpmn from 'bpmn-js-i18n-zh/lib/bpmn-js'
import properties from 'bpmn-js-i18n-zh/lib/properties-panel'
import camunda from 'bpmn-js-i18n-zh/lib/camunda-properties-panel'
import zeebe from 'bpmn-js-i18n-zh/lib/zeebe-properties-panel'

const zhCN = {
  ...bpmn,
  ...properties,
  ...camunda,
  ...zeebe
  // 可以在这里加上需要修改的部分内容
}

export function customTranslate(template, replacements) {
  replacements = replacements || {}

  // Translate
  template = zhCN[template] || template

  // Replace
  return template.replace(/{([^}]+)}/g, function (_, key) {
    return replacements[key] || '{' + key + '}'
  })
}

export default {
  translate: ['value', customTranslate]
}

```

```javascript
import Modeler from 'bpmn-js/lib/Modeler'
import {
    BpmnPropertiesPanelModule,
    BpmnPropertiesProviderModule,
    CamundaPlatformPropertiesProviderModule,
    ZeebePropertiesProviderModule,
    ZeebeTooltipProvider
} from 'bpmn-js-properties-panel'
import camundaModdleDescriptors from 'camunda-bpmn-moddle/resources/camunda'

import Translate from '../utils/Translate'

const modeler = new Modeler({
  container: '#modeler-content',
  propertiesPanel: {
    parent: '#panel-content'
  },
  additionalModules: [
    BpmnPropertiesPanelModule,
    BpmnPropertiesProviderModule,
    CamundaPlatformPropertiesProviderModule,
    // ZeebePropertiesProviderModule,
    // ZeebeTooltipProvider
    Translate
  ],
  moddleExtensions: {
    camunda: camundaModdleDescriptors
  }
})

modeler.createNewDiagram()
```
