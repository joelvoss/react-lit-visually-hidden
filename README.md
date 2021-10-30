# @react-lit/visually-hidden

Render text that is announced to screen readers but visually hidden.

## Installation

```bash
$ npm i @react-lit/visually-hidden
# or
$ yarn add @react-lit/visually-hidden
```

## Example

```js
import * as React from 'react',
import { VisuallyHidden } from '@react-lit/visually-hidden';

function Example() {
  return (
    <button>
      <VisuallyHidden>Close</VisuallyHidden>
      <span aria-hidden>🔒</span>
    </button>
  )
}
```

## Development

(1) Install dependencies

```bash
$ npm i
# or
$ yarn
```

(2) Run initial validation

```bash
$ ./Taskfile.sh validate
```

(3) Run tests in watch-mode to validate functionality.

```bash
$ ./Taskfile text -w
```

---

_This project was set up by @jvdx/core_
