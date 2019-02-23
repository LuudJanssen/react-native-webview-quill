import * as React from 'react';
import { WebViewType } from 'src/connectors/webView/WebViewType';
import providerRegistry from '../../providerRegistry';
import { loadLocalResource, Source } from '../../utils/loadLocalResource';
import webViewHtml from './resources/webView.html';

export default class Quill extends React.Component {
  private WebViewComponent: WebViewType = providerRegistry.WebViewComponent;
  private htmlSource: Source = loadLocalResource(webViewHtml);

  constructor(props: any) {
    super(props);
    this.state = {
      html: undefined,
    };

    fetch(this.htmlSource.uri)
      .then(e => e.text())
      .then(html => this.setState({ html }))
      .catch(err => console.error(err));
  }

  public render() {
    return <this.WebViewComponent source={{ html: this.state.html }} />;
  }
}
