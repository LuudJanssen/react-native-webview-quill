import { DummyImagePickerConnector } from '../connectors/imagePicker/DummyImagePickerConnector';
import { IImagePickerConnector } from '../connectors/imagePicker/IImagePickerConnector';
import { DummyWebviewConnector } from '../connectors/webview/DummyWebviewConnector';
import { IWebviewConnector } from '../connectors/webview/IWebviewConnector';

export class ProviderRegistry {
  set webviewConnector(connector: IWebviewConnector) {
    this._webviewConnector = connector;
  }

  get webviewConnector(): IWebviewConnector {
    return this._webviewConnector;
  }

  set imagePickerConnector(connector: IImagePickerConnector) {
    this._imagePickerConnector = connector;
  }

  get imagePickerConnector(): IImagePickerConnector {
    return this._imagePickerConnector;
  }

  private _webviewConnector: IWebviewConnector = new DummyWebviewConnector();
  private _imagePickerConnector: IImagePickerConnector = new DummyImagePickerConnector();
}
