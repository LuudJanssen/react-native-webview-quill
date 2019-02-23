import { Component } from 'react';
import { WebView } from 'react-native';
import { DummyComponentError } from '../DummyComponentError';

export default class DummyWebView extends Component implements WebView {
  public getWebViewHandle: () => any;
  public goForward: () => void;
  public goBack: () => void;
  public reload: () => void;
  public stopLoading: () => void;
  public postMessage: (msg: string) => void;
  public injectJavaScript: (js: string) => void;

  constructor(props: any) {
    super(props);
    throw new DummyComponentError(
      'Trying to use dummy WebView component. You should register a WebView component for this package to use.'
    );
  }

  public render() {
    return null;
  }
}
