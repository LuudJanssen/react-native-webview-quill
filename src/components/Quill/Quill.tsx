import * as React from 'react';
import providerRegistry from '../../providerRegistry';

export default class Quill extends React.Component {
  private WebViewComponent: React.ComponentType = providerRegistry.WebView;

  public render() {
    return <this.WebViewComponent>Test</this.WebViewComponent>;
  }
}
