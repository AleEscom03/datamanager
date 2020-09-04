```js script
import { html } from '@open-wc/demoing-storybook';
import '../data-manager.js';

export default {
  title: 'DataManager',
  component: 'data-manager',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# DataManager

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add data-manager
```

```js
import 'data-manager/data-manager.js';
```

```js preview-story
export const Simple = () => html`
  <data-manager></data-manager>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <data-manager title="Hello World"></data-manager>
`;
```
