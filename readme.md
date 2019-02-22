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
~~~~
 <Quill
    onContentsChange={contents => {
      console.log(contents);
    }}
    config={{
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
    style={{
      width: 300,
      height: 200
    }}
    contents={{
      ops: [
        {
          insert: "Some bold text",
          attributes: {
            bold: true
          }
        }
      ]
    }}
    imagePickerConfig={{
      title: "Kies een afbeelding",
      allowsEditing: true
    }}
  />
~~~~

## Properties
All these properties are optional.

| **Property**        | **Description**                                                                                                                                                                                                                                                             |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onContentsChange`  | A callback receiving the quilljs contents as parameter, [whenever the contents change](https://quilljs.com/docs/api/#text-change).                                                                                                                                      |
| `config`            | A quilljs instance config, see [their documentation](https://quilljs.com/docs/configuration/#options).                                                                                                                                                                  |
| `style`             | The style property for the inner WebView component, see [documentation](https://facebook.github.io/react-native/docs/style.html).                                                                                                                                       |
| `contents`          | The initial [quilljs contents](https://quilljs.com/guides/designing-the-delta-format/), useful for readonly/viewer component.                                                                                                                                           |
| `imagePickerConfig` | The [options object](https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Reference.md#options) for the [react-native-image-picker](https://github.com/react-native-community/react-native-image-picker) that is used to insert images. |
