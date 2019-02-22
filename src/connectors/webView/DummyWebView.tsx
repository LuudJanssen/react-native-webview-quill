import { Component } from 'react';
import { DummyComponentError } from '../DummyComponentError';

export default class DummyWebView extends Component {
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
