import { DummyImagePickerConnector } from '../connectors/imagePicker/DummyImagePickerConnector';
import { IImagePickerConnector } from '../connectors/imagePicker/IImagePickerConnector';
import DummyWebView from '../connectors/webView/DummyWebView';
import { WebViewType } from '../connectors/webView/WebViewType';

export class ProviderRegistry {
  set WebView(component: WebViewType) {
    this._WebView = component;
  }

  get WebView(): WebViewType {
    return this._WebView;
  }

  set imagePickerConnector(connector: IImagePickerConnector) {
    this._imagePickerConnector = connector;
  }

  get imagePickerConnector(): IImagePickerConnector {
    return this._imagePickerConnector;
  }

  private _WebView: WebViewType = DummyWebView;
  private _imagePickerConnector: IImagePickerConnector = new DummyImagePickerConnector();
}
