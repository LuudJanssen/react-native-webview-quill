# Installation

`npm install https://github.com/LuudJanssen/react-native-webview-quill`

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
        <Quill content={this.state.content} onContentChange={this.onContentChange} />
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
