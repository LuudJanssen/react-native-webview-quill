# React Native Webview Quill

*[Quill](https://quilljs.com) component for React Native built using
 `postMessage` communication and a WebView.*
 
 [![npm](https://img.shields.io/npm/v/react-native-webview-quill.svg)](https://www.npmjs.com/package/react-native-webview-quill)
 [![npm](https://img.shields.io/npm/dm/react-native-webview-quill.svg)](https://www.npmjs.com/package/react-native-webview-quill)
 [![npm](https://img.shields.io/npm/dt/react-native-webview-quill.svg)](https://www.npmjs.com/package/react-native-webview-quill)
 [![npm](https://img.shields.io/npm/l/react-native-webview-quill.svg)](https://github.com/react-native-component/react-native-webview-quill/blob/master/LICENSE)
 
## Installation

~~~
npm install react-native-webview-quill
~~~
to use you must set a webview provider once on your project
~~~
import {providerRegistry} from "react-native-webview-quill"
import {WebView} from 'react-native-webview-quill/src/providers/WebView/ReactNative/index';

providerRegistry.WebViewProvider = WebView
~~~

then you can use the ```Quill``` component:

```javascript
import {Quill} from 'react-native-webview-quill';
```


## Preview

<img src="./docs/0001.png?raw=true" width="300" alt="screenshot"></img>

## Properties
All properties are optional.

| **Property**        | **Description**                                                                                                                                                                                                                                                             |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onContentChange`  | A callback receiving the quilljs contents as parameter, [whenever the contents change](https://quilljs.com/docs/api/#text-change).                                                                                                                                      |
| `options`            | A quilljs instance config, see [their documentation](https://quilljs.com/docs/configuration/#options).                                                                                                                                                                  |
| `containerStyle`             | The style property for the inner WebView component, see [documentation](https://facebook.github.io/react-native/docs/style.html).                                                                                                                                       |
| `content`          | The initial [quilljs contents](https://quilljs.com/guides/designing-the-delta-format/), useful for readonly/viewer component.                                                                                                                                           |


## Example Usage

This example is typescript, though the library works with plain javascript as well.
```typescript
//Generic Dependencies
import * as React from 'react';
import { StatusBar, View } from 'react-native';

// React native webview quill
import { DeltaStatic, providerRegistry, Quill } from 'react-native-webview-quill';
import { WebView } from 'react-native-webview-quill/src/providers/WebView/ReactNative/index';

// Only once: Set the webview implementation to use
// Should be done once, probably in your index.js
providerRegistry.WebViewProvider = WebView;

// This is a example of a QuillDelta object that describes the
// content and formatting of the richtext editor
// More information at https://quilljs.com/docs/delta/
const defaultOps: DeltaStatic = {
  ops: [
    {
      insert: 'Test',
      attributes: {
        bold: true,
      },
    },
  ],
};

export default class App extends React.Component<{}, { content: DeltaStatic }> {
  constructor(props: any) {
    super(props);
    this.state = {
      content: defaultOps,
    };
  }

  public render() {
    //Render a full screen quill editor
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: StatusBar.currentHeight }} />
        <Quill
          content={
            /* the initial content */
            this.state.content
          }
          onContentChange={
            /* Callend when an edit is made */
            this.onContentChange
          }
          containerStyle={
            /*The style passed to the editor container*/
            { flex: 1 }
           }
        />
      </View>
    );
  }

  private onContentChange = (content: DeltaStatic) => {
    // Save this content
    this.setState({ content });
  };
}

```
