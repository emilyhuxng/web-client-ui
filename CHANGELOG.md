# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.37.3](https://github.com/deephaven/web-client-ui/compare/v0.37.2...v0.37.3) (2023-04-25)

### Bug Fixes

- Move @deephaven/redux to be a dependency instead ([#1249](https://github.com/deephaven/web-client-ui/issues/1249)) ([3f24e11](https://github.com/deephaven/web-client-ui/commit/3f24e110ca08c5afa7e39d58d0171f2ce4999404))

## [0.37.2](https://github.com/deephaven/web-client-ui/compare/v0.37.1...v0.37.2) (2023-04-25)

### Bug Fixes

- Fixed bad dependency in package-lock ([#1248](https://github.com/deephaven/web-client-ui/issues/1248)) ([8c78177](https://github.com/deephaven/web-client-ui/commit/8c781778a57ea0940d2a114fdfab0b6f82ce2a80)), closes [#1246](https://github.com/deephaven/web-client-ui/issues/1246)

## [0.37.1](https://github.com/deephaven/web-client-ui/compare/v0.37.0...v0.37.1) (2023-04-25)

### Bug Fixes

- Fixed dependency mapping ([#1247](https://github.com/deephaven/web-client-ui/issues/1247)) ([1e250a9](https://github.com/deephaven/web-client-ui/commit/1e250a9d096e03c77915495f277dabd717695319)), closes [#1246](https://github.com/deephaven/web-client-ui/issues/1246)

# [0.37.0](https://github.com/deephaven/web-client-ui/compare/v0.36.0...v0.37.0) (2023-04-20)

### Bug Fixes

- Fix OneClick links not filtering plots ([#1217](https://github.com/deephaven/web-client-ui/issues/1217)) ([9b20f9e](https://github.com/deephaven/web-client-ui/commit/9b20f9e8f3912959e32ae8d8d597ee584357ad70)), closes [#1198](https://github.com/deephaven/web-client-ui/issues/1198)

### Features

- **@deephaven/components:** Custom React Spectrum Provider ([#1211](https://github.com/deephaven/web-client-ui/issues/1211)) ([609c57e](https://github.com/deephaven/web-client-ui/commit/609c57ed38a4a905e52e1d3e2588d3e7079a1b81)), closes [#1210](https://github.com/deephaven/web-client-ui/issues/1210)
- Added support for null in useTableListener ([#1227](https://github.com/deephaven/web-client-ui/issues/1227)) ([e485c86](https://github.com/deephaven/web-client-ui/commit/e485c868b6e82a0ff44a1e2682812a368d05eb7e)), closes [#1228](https://github.com/deephaven/web-client-ui/issues/1228)
- Core authentication plugins ([#1180](https://github.com/deephaven/web-client-ui/issues/1180)) ([1624309](https://github.com/deephaven/web-client-ui/commit/16243090aae7e2731a0c43d09fa8b43e5dfff8fc)), closes [#1058](https://github.com/deephaven/web-client-ui/issues/1058)
- DH-14630 useViewportData + supporting utils ([#1230](https://github.com/deephaven/web-client-ui/issues/1230)) ([2f9c020](https://github.com/deephaven/web-client-ui/commit/2f9c020bfcb1ae508e219759e216a5ef7a63162d)), closes [#1221](https://github.com/deephaven/web-client-ui/issues/1221)
- Improve plugin load error handling ([#1214](https://github.com/deephaven/web-client-ui/issues/1214)) ([8ac7dc8](https://github.com/deephaven/web-client-ui/commit/8ac7dc826af579e129431b222524cb657b326099))
- usePromiseFactory hook ([#1226](https://github.com/deephaven/web-client-ui/issues/1226)) ([f8c4ba3](https://github.com/deephaven/web-client-ui/commit/f8c4ba311b20958ab1b83c086fc94d9f61bf9ddd)), closes [#1221](https://github.com/deephaven/web-client-ui/issues/1221)

# [0.36.0](https://github.com/deephaven/web-client-ui/compare/v0.35.0...v0.36.0) (2023-04-14)

### Bug Fixes

- Freezing a tree table column crashes the panel ([#1192](https://github.com/deephaven/web-client-ui/issues/1192)) ([5142a4d](https://github.com/deephaven/web-client-ui/commit/5142a4d7fc216034d2bd4218b928bfe0768c6dff)), closes [#1136](https://github.com/deephaven/web-client-ui/issues/1136)

### Features

- Display workerName and processInfoId in the console status bar ([#1173](https://github.com/deephaven/web-client-ui/issues/1173)) ([85ce600](https://github.com/deephaven/web-client-ui/commit/85ce600ad63cd49504f75db5663ed64ec095749e))
- Pass optional envoyPrefix query param to CoreClient constructor ([#1219](https://github.com/deephaven/web-client-ui/issues/1219)) ([8b1e58c](https://github.com/deephaven/web-client-ui/commit/8b1e58cf1cb4a1aab18405b87160b223f04ccd9d))
- usePanelRegistration hook ([#1208](https://github.com/deephaven/web-client-ui/issues/1208)) ([d8db9ca](https://github.com/deephaven/web-client-ui/commit/d8db9ca6afc3833020e397d05a791bb96e24c14d)), closes [#1207](https://github.com/deephaven/web-client-ui/issues/1207)

# [0.35.0](https://github.com/deephaven/web-client-ui/compare/v0.34.0...v0.35.0) (2023-04-04)

### Bug Fixes

- Fix column data appearing incorrectly when multiplier null ([#1194](https://github.com/deephaven/web-client-ui/issues/1194)) ([e22e68d](https://github.com/deephaven/web-client-ui/commit/e22e68d46c98df0eca6ebd38d1487d8784377575)), closes [#1193](https://github.com/deephaven/web-client-ui/issues/1193) [#0](https://github.com/deephaven/web-client-ui/issues/0)
- Fixed generic selector types ([#1199](https://github.com/deephaven/web-client-ui/issues/1199)) ([de9b751](https://github.com/deephaven/web-client-ui/commit/de9b751ee0ba3255b68c1daf50dad417ef7eded4)), closes [#1197](https://github.com/deephaven/web-client-ui/issues/1197)

### Features

- Added isACLEditor prop to Redux state ([#1201](https://github.com/deephaven/web-client-ui/issues/1201)) ([f39100a](https://github.com/deephaven/web-client-ui/commit/f39100a94ec195552a8f6cebf1f484c215f6c79a)), closes [#1200](https://github.com/deephaven/web-client-ui/issues/1200)
- Created ValueOf<T> util type ([#1203](https://github.com/deephaven/web-client-ui/issues/1203)) ([19fcf0e](https://github.com/deephaven/web-client-ui/commit/19fcf0e7efa9290bf4aa072b3dd8a2826f16cc75)), closes [#1202](https://github.com/deephaven/web-client-ui/issues/1202)

# [0.34.0](https://github.com/deephaven/web-client-ui/compare/v0.33.0...v0.34.0) (2023-03-31)

### Bug Fixes

- Conditional formatting not being applied to custom columns ([#1181](https://github.com/deephaven/web-client-ui/issues/1181)) ([1e4f8f9](https://github.com/deephaven/web-client-ui/commit/1e4f8f92e246b417bb2c083a16978ca42ae63e61)), closes [#1135](https://github.com/deephaven/web-client-ui/issues/1135)
- Context menu does not appear when right-clicking IrisGrid component in styleguide ([#1184](https://github.com/deephaven/web-client-ui/issues/1184)) ([696cc2d](https://github.com/deephaven/web-client-ui/commit/696cc2d556081ccc0a70c6fc479d661a59c80c4a)), closes [#1065](https://github.com/deephaven/web-client-ui/issues/1065)
- Double clicking a file causes the loader to flash incorrectly ([#1189](https://github.com/deephaven/web-client-ui/issues/1189)) ([a279670](https://github.com/deephaven/web-client-ui/commit/a279670e536e382e1df17dcb5337f1164c82a3ff)), closes [#942](https://github.com/deephaven/web-client-ui/issues/942)
- Preview did not draw correctly when dragging Grids ([#1183](https://github.com/deephaven/web-client-ui/issues/1183)) ([1a0ff8d](https://github.com/deephaven/web-client-ui/commit/1a0ff8da23c69859ac54531d681fa2356267bab8)), closes [#1112](https://github.com/deephaven/web-client-ui/issues/1112)
- Save or discard a changed notebook does not close modal on first click ([#1188](https://github.com/deephaven/web-client-ui/issues/1188)) ([bba2d01](https://github.com/deephaven/web-client-ui/commit/bba2d01df0c541ca8cfe89753098ff42919036ab)), closes [#1187](https://github.com/deephaven/web-client-ui/issues/1187)
- Typing for WritableStream ([#1186](https://github.com/deephaven/web-client-ui/issues/1186)) ([dfdf356](https://github.com/deephaven/web-client-ui/commit/dfdf356e59a387811794884f13abbd95a163d247)), closes [#803](https://github.com/deephaven/web-client-ui/issues/803)

### Features

- Add signatureHelp and hover providers to monaco ([#1178](https://github.com/deephaven/web-client-ui/issues/1178)) ([f1f3abf](https://github.com/deephaven/web-client-ui/commit/f1f3abffc9df4178477714f06dcc57d40d6942a9))
- Double click notebook tab to remove its preview status ([#1190](https://github.com/deephaven/web-client-ui/issues/1190)) ([4870171](https://github.com/deephaven/web-client-ui/commit/4870171defd2f361295105489c87a41b2c8d1f3a)), closes [#1189](https://github.com/deephaven/web-client-ui/issues/1189)
- JS API reconnect ([#1149](https://github.com/deephaven/web-client-ui/issues/1149)) ([15551df](https://github.com/deephaven/web-client-ui/commit/15551df634b2e67e0697d7e16328d9573b9d4af5)), closes [#1140](https://github.com/deephaven/web-client-ui/issues/1140)

# [0.33.0](https://github.com/deephaven/web-client-ui/compare/v0.32.0...v0.33.0) (2023-03-28)

### Bug Fixes

- Added smarter caching for command history fetching ([#1145](https://github.com/deephaven/web-client-ui/issues/1145)) ([76b3bd5](https://github.com/deephaven/web-client-ui/commit/76b3bd51059638d5b864fabe8b4121b6a3554f17)), closes [#325](https://github.com/deephaven/web-client-ui/issues/325)
- DH-14439 Fix QueryMonitor breaking on "null" in default search filter ([#1159](https://github.com/deephaven/web-client-ui/issues/1159)) ([ac6a514](https://github.com/deephaven/web-client-ui/commit/ac6a51440d7499b8bb2f479509af817cf56fa7ea))
- Error thrown when cell overflow position is unknown ([#1177](https://github.com/deephaven/web-client-ui/issues/1177)) ([bb24f61](https://github.com/deephaven/web-client-ui/commit/bb24f61018c5af9325c3e3dc36abd63c3b10d51a)), closes [#1116](https://github.com/deephaven/web-client-ui/issues/1116)
- Goto Value Skips Rows on String Column, Displays Incorrect Filter, and `shift+enter` Doesn't go to Previous ([#1162](https://github.com/deephaven/web-client-ui/issues/1162)) ([e83d7c9](https://github.com/deephaven/web-client-ui/commit/e83d7c9f7265fc6402a347fa8826cef16ad3c93f)), closes [#1156](https://github.com/deephaven/web-client-ui/issues/1156) [#1157](https://github.com/deephaven/web-client-ui/issues/1157)
- Handling no columns ([#1170](https://github.com/deephaven/web-client-ui/issues/1170)) ([2ac25ae](https://github.com/deephaven/web-client-ui/commit/2ac25aed8afb51272c46050a1a0d278da9a87bc6)), closes [#1169](https://github.com/deephaven/web-client-ui/issues/1169)
- Scrolling horizontally in Linker mode renders empty cells ([#1160](https://github.com/deephaven/web-client-ui/issues/1160)) ([e314be6](https://github.com/deephaven/web-client-ui/commit/e314be6d32792aea3791ee5189fd45d37c86011c)), closes [#1146](https://github.com/deephaven/web-client-ui/issues/1146)

### Code Refactoring

- Fix fast refresh invalidations ([#1150](https://github.com/deephaven/web-client-ui/issues/1150)) ([2606826](https://github.com/deephaven/web-client-ui/commit/26068267c2cd67bc971b9537f8ce4108372167f5)), closes [#727](https://github.com/deephaven/web-client-ui/issues/727)
- TypeScript Type Improvements ([#1056](https://github.com/deephaven/web-client-ui/issues/1056)) ([0be0850](https://github.com/deephaven/web-client-ui/commit/0be0850a25e422150c61fbb7a6eff94614546f90)), closes [#1122](https://github.com/deephaven/web-client-ui/issues/1122)

### Features

- Add clickable links in cell overflow modal ([#1147](https://github.com/deephaven/web-client-ui/issues/1147)) ([1ce9547](https://github.com/deephaven/web-client-ui/commit/1ce95473ff37d423ba8ac687c85fe278fbde9bd3)), closes [#1128](https://github.com/deephaven/web-client-ui/issues/1128)

### BREAKING CHANGES

- Renamed `renderFileListItem` to `FileListItem`.
  Renamed `RenderFileListItemProps` to `FileListItemProps`.
  Removed exports for `ConsolePlugin.assertIsConsolePluginProps`,
  `GridPlugin.SUPPORTED_TYPES`, `FileList.getPathFromItem`,
  `FileList.DRAG_HOVER_TIMEOUT`, `FileList.getItemIcon`,
  `Grid.directionForKey`, `GotoRow.isIrisGridProxyModel`, and
  `Aggregations.SELECTABLE_OPTIONS`. These were all only being consumed
  within their own file and are not consumed in enterprise
- Selector Type removed from redux

# [0.32.0](https://github.com/deephaven/web-client-ui/compare/v0.31.1...v0.32.0) (2023-03-10)

### Bug Fixes

- DH-12163 - Column grouping sidebar test failure fixes ([#1142](https://github.com/deephaven/web-client-ui/issues/1142)) ([a55308d](https://github.com/deephaven/web-client-ui/commit/a55308d736e98a730e4512a5b3c199f693d2a62b))
- Fixed rollup divider position ([#1125](https://github.com/deephaven/web-client-ui/issues/1125)) ([859bfa2](https://github.com/deephaven/web-client-ui/commit/859bfa290cf7bc5e920c6c8a02cbbc91f95b3999)), closes [#1062](https://github.com/deephaven/web-client-ui/issues/1062)
- Grid rendering header incorrectly when hiding all children in a group via layout hints ([#1139](https://github.com/deephaven/web-client-ui/issues/1139)) ([2fbccc6](https://github.com/deephaven/web-client-ui/commit/2fbccc60a7fe55264e7dceb260ba3962957a8eba)), closes [#1097](https://github.com/deephaven/web-client-ui/issues/1097)

### Code Refactoring

- Replace usage of Column.index with column name ([#1126](https://github.com/deephaven/web-client-ui/issues/1126)) ([7448a88](https://github.com/deephaven/web-client-ui/commit/7448a88a651f82416de9c2aa0ebbbb217a6eae5c)), closes [#965](https://github.com/deephaven/web-client-ui/issues/965)

### Features

- Add support for clickable links ([#1088](https://github.com/deephaven/web-client-ui/issues/1088)) ([f7f918e](https://github.com/deephaven/web-client-ui/commit/f7f918e7f0c5f1b0fb4030eb748010aaf4d196df)), closes [#712](https://github.com/deephaven/web-client-ui/issues/712)

### BREAKING CHANGES

- Removed index property from dh.types Column type.
  IrisGridUtils.dehydrateSort now returns column name instead of index.
  TableUtils now expects column name instead of index for functions that
  don't have access to a columns array.

## [0.31.1](https://github.com/deephaven/web-client-ui/compare/v0.31.0...v0.31.1) (2023-03-03)

### Bug Fixes

- Aggregations should be available when creating a rollup ([#1129](https://github.com/deephaven/web-client-ui/issues/1129)) ([c3d8433](https://github.com/deephaven/web-client-ui/commit/c3d8433206f7855bd5a8e27ad63d5e33e40943fe)), closes [/github.com/deephaven/web-client-ui/blob/a069543812b6c544957ebf664e0918e98a3affbf/packages/iris-grid/src/IrisGrid.tsx#L1288](https://github.com//github.com/deephaven/web-client-ui/blob/a069543812b6c544957ebf664e0918e98a3affbf/packages/iris-grid/src/IrisGrid.tsx/issues/L1288)

# [0.31.0](https://github.com/deephaven/web-client-ui/compare/v0.30.1...v0.31.0) (2023-03-03)

### Bug Fixes

- Add react-dom, redux and react-redux to remote component dependencies ([#1127](https://github.com/deephaven/web-client-ui/issues/1127)) ([d6c8a98](https://github.com/deephaven/web-client-ui/commit/d6c8a988d62157abfb8daadbff5db3eaef21a247))
- Added date time parsing for conditional formatting ([#1120](https://github.com/deephaven/web-client-ui/issues/1120)) ([4c7710e](https://github.com/deephaven/web-client-ui/commit/4c7710ece0d5cdfb3b196b06a396f2e760460ef9)), closes [#1108](https://github.com/deephaven/web-client-ui/issues/1108)
- Clicking a folder in file explorer panel sometimes fails to open or close it ([#1099](https://github.com/deephaven/web-client-ui/issues/1099)) ([7a7fc14](https://github.com/deephaven/web-client-ui/commit/7a7fc140d8721297bbdc17af879777b27f25269a)), closes [#1085](https://github.com/deephaven/web-client-ui/issues/1085)
- Conditional date formatting ([#1104](https://github.com/deephaven/web-client-ui/issues/1104)) ([2f503ba](https://github.com/deephaven/web-client-ui/commit/2f503bad83ef132b0cf9739803dc5014781a617b))
- Disable applying "No formatting" ([#1107](https://github.com/deephaven/web-client-ui/issues/1107)) ([14020f1](https://github.com/deephaven/web-client-ui/commit/14020f156c7a61fa48323fdb68c99f5161a4ff10)), closes [#1106](https://github.com/deephaven/web-client-ui/issues/1106)
- Fix the style guide ([#1119](https://github.com/deephaven/web-client-ui/issues/1119)) ([e4a75a1](https://github.com/deephaven/web-client-ui/commit/e4a75a1882335d1c4a3481005d7af8d9f2679f9a))
- Ordering of subplots ([#1111](https://github.com/deephaven/web-client-ui/issues/1111)) ([c4a3795](https://github.com/deephaven/web-client-ui/commit/c4a37951fbeb88297cbde92f0551d1272b41629f))
- Select Distinct Column Throws `null` error ([#1101](https://github.com/deephaven/web-client-ui/issues/1101)) ([144605a](https://github.com/deephaven/web-client-ui/commit/144605a533da29283aa5059f3f968402429c5e08)), closes [#1100](https://github.com/deephaven/web-client-ui/issues/1100)

### Features

- Goto Value Improvements ([#1072](https://github.com/deephaven/web-client-ui/issues/1072)) ([970a575](https://github.com/deephaven/web-client-ui/commit/970a57574145a6e44694dbac27b6938c8b4b1e9e)), closes [#1027](https://github.com/deephaven/web-client-ui/issues/1027)
- Improve text labels based on suggestions from chatGPT ([#1118](https://github.com/deephaven/web-client-ui/issues/1118)) ([d852e49](https://github.com/deephaven/web-client-ui/commit/d852e495a81c26a9273d6f8a72d4ea9fe9a04668))
- Instants and ZonedDateTimes should be treated as DateTimes ([#1117](https://github.com/deephaven/web-client-ui/issues/1117)) ([3900a2e](https://github.com/deephaven/web-client-ui/commit/3900a2e5b319bbc78c300b05fb21c9d529e81488)), closes [deephaven/deephaven-core#3385](https://github.com/deephaven/deephaven-core/issues/3385) [deephaven/deephaven-core#3455](https://github.com/deephaven/deephaven-core/issues/3455)
- isConfirmDangerProp ([#1110](https://github.com/deephaven/web-client-ui/issues/1110)) ([ffb7ada](https://github.com/deephaven/web-client-ui/commit/ffb7ada4814e03f9c4471e85319a6bb061943363)), closes [#1109](https://github.com/deephaven/web-client-ui/issues/1109)

## [0.30.1](https://github.com/deephaven/web-client-ui/compare/v0.30.0...v0.30.1) (2023-02-16)

### Bug Fixes

- add missing return for editvalueforcell, missing from TS conversion ([#1090](https://github.com/deephaven/web-client-ui/issues/1090)) ([1b00840](https://github.com/deephaven/web-client-ui/commit/1b00840886051bf2d7393185ecb8047fa977de49)), closes [#1087](https://github.com/deephaven/web-client-ui/issues/1087)
- DH-14240 hasHeaders false should hide header bar ([#1086](https://github.com/deephaven/web-client-ui/issues/1086)) ([28d97ad](https://github.com/deephaven/web-client-ui/commit/28d97ade8886c234f47a6413b5a1e93480d4e6a2))
- Remove default export in jsapi-types ([#1092](https://github.com/deephaven/web-client-ui/issues/1092)) ([7de114a](https://github.com/deephaven/web-client-ui/commit/7de114a057abea48a436cdb3fdd40bc04d3156f5))

# [0.30.0](https://github.com/deephaven/web-client-ui/compare/v0.29.1...v0.30.0) (2023-02-13)

### Features

- Import JS API as a module ([#1084](https://github.com/deephaven/web-client-ui/issues/1084)) ([9aab657](https://github.com/deephaven/web-client-ui/commit/9aab657ca674e404db6d3cf9b9c663627d635c2c)), closes [#444](https://github.com/deephaven/web-client-ui/issues/444)

### BREAKING CHANGES

- The JS API packaged as a module is now required for the
  `code-studio`, `embed-grid`, and `embed-chart` applications. Existing
  (Enterprise) applications should be able to use `jsapi-shim` still and
  load the JS API using the old method.

## [0.29.1](https://github.com/deephaven/web-client-ui/compare/v0.29.0...v0.29.1) (2023-02-10)

### Bug Fixes

- DH-14237: down arrow in console not returning to blank field ([#1082](https://github.com/deephaven/web-client-ui/issues/1082)) ([e15c125](https://github.com/deephaven/web-client-ui/commit/e15c1256a11576d1fa9f258f0c9c63d111adf664)), closes [#646](https://github.com/deephaven/web-client-ui/issues/646)

# [0.29.0](https://github.com/deephaven/web-client-ui/compare/v0.28.0...v0.29.0) (2023-02-03)

### Features

- Expandable rows shows tooltip ([#1068](https://github.com/deephaven/web-client-ui/issues/1068)) ([f2efc0a](https://github.com/deephaven/web-client-ui/commit/f2efc0ad24972ff1e9aa5887ec8bb871c9840a9c)), closes [#1061](https://github.com/deephaven/web-client-ui/issues/1061)
- Update ^ in shorcut to "Ctrl+" per windows guidelines ([#1069](https://github.com/deephaven/web-client-ui/issues/1069)) ([60c955a](https://github.com/deephaven/web-client-ui/commit/60c955a95f87b29d2347847849d128133bdc3b99))
- Use Conventional Commits for release management/PRs ([#1057](https://github.com/deephaven/web-client-ui/issues/1057)) ([aeaf940](https://github.com/deephaven/web-client-ui/commit/aeaf940b52b8a88322f4bcb9b7803c394937a28c))
