<p align="center">
  <a href="https://coreui.io/">
    <img
      src="https://coreui.io/images/brand/coreui-signet.svg"
      alt="CoreUI logo"
      width="200"
    />
  </a>
</p>

<h3 align="center">CoreUI for React.js</h3>

<p align="center">
  React.js Components Library built on top of Bootstrap 5 and TypeScript.
  <br>
  <a href="https://coreui.io/react/docs/getting-started/introduction"><strong>Explore CoreUI for React.js docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/coreui/coreui-react/issues/new?template=bug_report.md">Report bug</a>
  ·
  <a href="https://github.com/coreui/coreui-react/issues/new?template=feature_request.md">Request feature</a>
  ·
  <a href="https://coreui.io/blog/">Blog</a>
</p>


## Table of contents

- [Quick start](#quick-start)
- [Components](#components)
- [Status](#status)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)

## Quick start

### Instalation

Several quick start options are available:

- [Download the latest release](https://github.com/coreui/coreui-react-pro/archive/v4.12.3.zip)
- Clone the repo: `git clone https://github.com/coreui/coreui-react.git`
- Install with [npm](https://www.npmjs.com/): `npm install @coreui/react`
- Install with [yarn](https://yarnpkg.com/): `yarn add @coreui/react`

Read the [Getting started page](https://coreui.io/react/docs/getting-started/introduction/) for information on the framework contents, templates and examples, and more.

### Stylesheets

React components are styled using `@coreui/coreui` CSS library, but you can use them also with bootstrap CSS library. That is possible because `@coreui/coreui` library is compatible with bootstrap, it just extends its functionalities. The only exception are custom CoreUI components, which don't exist in the Bootstrap ecosystem.

#### CoreUI CSS files

##### Installation

```bash
yarn add @coreui/coreui
```

or

```bash
npm install @coreui/coreui --save
```

##### Basic usage

```js
import '@coreui/coreui/dist/css/coreui.min.css'
```

#### Bootstrap CSS files

##### Installation

```bash
yarn add bootstrap
```

or

```bash
npm install bootstrap
```

##### Basic usage

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

## Components

- [React Accordion](https://coreui.io/react/docs/components/accordion/)
- [React Alert](https://coreui.io/react/docs/components/alert/)
- [React Avatar](https://coreui.io/react/docs/components/avatar/)
- [React Badge](https://coreui.io/react/docs/components/badge/)
- [React Breadcrumb](https://coreui.io/react/docs/components/breadcrumb/)
- [React Button](https://coreui.io/react/docs/components/button/)
- [React Button Group](https://coreui.io/react/docs/components/button-group/)
- [React Callout](https://coreui.io/react/docs/components/callout/)
- [React Card](https://coreui.io/react/docs/components/card/)
- [React Carousel](https://coreui.io/react/docs/components/carousel/)
- [React Checkbox](https://coreui.io/react/docs/forms/checkbox/)
- [React Close Button](https://coreui.io/react/docs/components/close-button/)
- [React Collapse](https://coreui.io/react/docs/components/collapse/)
- [React Date Picker](https://coreui.io/react/docs/forms/date-picker/) **PRO**
- [React Date Range Picker](https://coreui.io/react/docs/forms/date-range-picker/) **PRO**
- [React Dropdown](https://coreui.io/react/docs/components/dropdown/)
- [React Floating Labels](https://coreui.io/react/docs/forms/floating-labels/)
- [React Footer](https://coreui.io/react/docs/components/footer/)
- [React Header](https://coreui.io/react/docs/components/header/)
- [React Image](https://coreui.io/react/docs/components/image/)
- [React Input](https://coreui.io/react/docs/forms/input/)
- [React Input Group](https://coreui.io/react/docs/forms/input-group/)
- [React List Group](https://coreui.io/react/docs/components/list-group/)
- [React Loading Button](https://coreui.io/react/docs/components/loading-button/) **PRO**
- [React Modal](https://coreui.io/react/docs/components/modal/)
- [React Multi Select](https://coreui.io/react/docs/forms/multi-select/) **PRO**
- [React Navs & Tabs](https://coreui.io/react/docs/components/navs-tabs/)
- [React Navbar](https://coreui.io/react/docs/components/navbar/)
- [React Offcanvas](https://coreui.io/react/docs/components/offcanvas/)
- [React Pagination](https://coreui.io/react/docs/components/pagination/)
- [React Placeholder](https://coreui.io/react/docs/components/placeholder/)
- [React Popover](https://coreui.io/react/docs/components/popover/)
- [React Progress](https://coreui.io/react/docs/components/progress/)
- [React Radio](https://coreui.io/react/docs/forms/radio/)
- [React Range](https://coreui.io/react/docs/forms/range/)
- [React Select](https://coreui.io/react/docs/forms/select/)
- [React Sidebar](https://coreui.io/react/docs/components/sidebar/)
- [React Smart Pagination](https://coreui.io/react/docs/components/smart-pagination/) **PRO**
- [React Smart Table](https://coreui.io/react/docs/components/smart-table/) **PRO**
- [React Spinner](https://coreui.io/react/docs/components/spinner/)
- [React Switch](https://coreui.io/react/docs/forms/switch/)
- [React Table](https://coreui.io/react/docs/components/table/)
- [React Textarea](https://coreui.io/react/docs/forms/textarea/)
- [React Time Picker](https://coreui.io/react/docs/forms/time-picker/) **PRO**
- [React Toast](https://coreui.io/react/docs/components/toast/)
- [React Tooltip](https://coreui.io/react/docs/components/tooltip/)

## Status

[![npm version](https://img.shields.io/npm/v/@coreui/react)](https://www.npmjs.com/package/@coreui/react)

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/coreui/coreui-react/blob/v4/.github/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/coreui/coreui-react/issues/new).

## Documentation

The documentation for the CoreUI & CoreUI PRO is hosted at our website [CoreUI for React](https://coreui.io/react/docs/getting-started/introduction)

### Running documentation locally

1. Run `yarn install` or `npm install` to install the Node.js dependencies.
2. Run `yarn bootstrap` or `npm run bootstrap` to link local packages together and install remaining package dependencies.
3. From the root directory, run `yarn docs:dev` or `npm run docs:dev` (or a specific npm script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
4. Open `http://localhost:8000/` in your browser, and voilà.

## Contributing

Please read through our [contributing guidelines](https://github.com/coreui/coreui-react/blob/v4/.github/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Editor preferences are available in the [editor config](https://github.com/coreui/coreui-react/blob/v4/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.

## Community

Stay up to date on the development of CoreUI and reach out to the community with these helpful resources.

- Read and subscribe to [The Official CoreUI Blog](https://coreui.io/blog/).

You can also follow [@core_ui on Twitter](https://twitter.com/core_ui).

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, CoreUI is maintained under [the Semantic Versioning guidelines](http://semver.org/).

See [the Releases section of our project](https://github.com/coreui/coreui-react/releases) for changelogs for each release version.

## Creators

**Łukasz Holeczek**

- <https://twitter.com/lukaszholeczek>
- <https://github.com/mrholek>

**Andrzej Kopański**

- <https://github.com/xidedix>

**The CoreUI Team**

- <https://github.com/orgs/coreui/people>
