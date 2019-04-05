# Installation

`npm install react-native-webview-quill`

## Example Usage
```javascript
//Import Dependencies
import { Quill, providerRegistry } from 'react-native-webview-quill';
import { WebView } from 'react-native-webview-quill/src/providers/WebView/ReactNative/index';

// Only once: Set the webview implementation to use
// Should be done once, pbobably in your index.js
providerRegistry.WebViewProvider = WebView;

// This is a example of a QuillDelta object that describes the
// content and formatting of the richtext editor
// More information at https://quilljs.com/docs/delta/
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
        <Quill content={this.state.content} onContentChange={this.onContentChange} />
      </View>
    );
  }

  private onContentChange = (content: DeltaStatic) => {
    this.setState({ content });

    console.log('CONTENT', content);
  };
}
```
