import { DummyImagePickerConnector } from '../connectors/imagePicker/DummyImagePickerConnector';
import { IImagePickerConnector } from '../connectors/imagePicker/IImagePickerConnector';
import DummyWebView from '../connectors/webView/DummyWebView';
import { WebViewType } from '../connectors/webView/WebViewType';

export class ProviderRegistry {
  set WebViewComponent(component: WebViewType) {
    this._WebViewComponent = component;
  }

  get WebViewComponent(): WebViewType {
    return this._WebViewComponent;
  }

  set imagePickerConnector(connector: IImagePickerConnector) {
    this._imagePickerConnector = connector;
  }

  get imagePickerConnector(): IImagePickerConnector {
    return this._imagePickerConnector;
  }

  private _WebViewComponent: WebViewType = DummyWebView;
  private _imagePickerConnector: IImagePickerConnector = new DummyImagePickerConnector();
}
