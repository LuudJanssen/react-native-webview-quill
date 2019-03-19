# React Native Webview Quill
## [Quill](https://quilljs.com) component for React Native built using `postMessage` communication and a WebView.

[![npm](https://img.shields.io/npm/v/react-native-webview-quill.svg)](https://www.npmjs.com/package/react-native-webview-quill)
[![npm](https://img.shields.io/npm/dm/react-native-webview-quill.svg)](https://www.npmjs.com/package/react-native-webview-quill)
[![npm](https://img.shields.io/npm/dt/react-native-webview-quill.svg)](https://www.npmjs.com/package/react-native-webview-quill)
[![npm](https://img.shields.io/npm/l/react-native-webview-quill.svg)](https://github.com/react-native-component/react-native-webview-quill/blob/master/LICENSE)

## Installation
~~~
npm install react-native-webview-quill
~~~
and then
~~~
import {Quill} from "react-native-webview-quill"
~~~

## Usage
This package can be used to create both an editor and a viewer

Creating a Quill.js editor with the standard toolbar:

```javascript
import { Quill, providerRegistry } from 'react-native-webview-quill';
import { WebView } from 'react-native-webview-quill/src/providers/WebView/ReactNative/index';

providerRegistry.WebViewProvider = WebView;

const defaultOps = {
  ops: [
    {
      insert: 'Test',
      attributes: {
        bold: true,
      },
    },
  ],
};

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      content: defaultOps,
    };
  }

  public render() {
    return (
      <View style={{ flex: 1 }}>
        <Quill
          onContentsChange={contents => {
            console.log(contents);
          }}
          options={{
            modules: {
              //toolbar: false,
              toolbar: [
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline"],
                ["image", "video"]
              ]
            },
            theme: "snow", // or 'bubble'
            placeholder: "Placeholder text"
            //readOnly: true,
          }}
          containerStyle={{
            width: 300,
            height: 200
          }}
          contents={defaultOps}
          imagePickerConfig={{
            title: "Kies een afbeelding",
            allowsEditing: true
          }}
        />
      </View>
    );
  }

  private onContentChange = (content: DeltaStatic) => {
    this.setState({ content });

    console.log('CONTENT', content);
  };
}
```

## Properties
All these properties are optional.

| **Property**        | **Description**                                                                                                                                                                                                                                                             |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onContentsChange`  | A callback receiving the quilljs contents as parameter, [whenever the contents change](https://quilljs.com/docs/api/#text-change).                                                                                                                                      |
| `options`            | A quilljs instance config, see [their documentation](https://quilljs.com/docs/configuration/#options).                                                                                                                                                                  |
| `containerStyle`             | The style property for the inner WebView component, see [documentation](https://facebook.github.io/react-native/docs/style.html).                                                                                                                                       |
| `contents`          | The initial [quilljs contents](https://quilljs.com/guides/designing-the-delta-format/), useful for readonly/viewer component.                                                                                                                                           |
| `imagePickerConfig` | The [options object](https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Reference.md#options) for the [react-native-image-picker](https://github.com/react-native-community/react-native-image-picker) that is used to insert images. |
