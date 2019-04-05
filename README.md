# Installation

`npm install react-native-webview-quill`

## Preview

<img src="./docs/0001.png?raw=true" width="300" alt="screenshot"></img>

## Example Usage
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
          content={this.state.content
          /* the initial content */}
          onContentChange={this.onContentChange
          /* Callend when an edit is made */}
          containerStyle={{ flex: 1 }
      /*The style passed to the editor container*/}
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
