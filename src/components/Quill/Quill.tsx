import * as React from 'react';
import { WebViewType } from 'src/connectors/webView/WebViewType';
import providerRegistry from '../../providerRegistry';

export default class Quill extends React.Component {
  private WebViewComponent: WebViewType = providerRegistry.WebViewComponent;

  public render() {
    return <this.WebViewComponent source={{ html: '<h1>This is test html</h1>' }} />;
  }
}
