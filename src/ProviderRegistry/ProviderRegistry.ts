import { ComponentType } from 'react';
import { DummyImagePickerConnector } from '../connectors/imagePicker/DummyImagePickerConnector';
import { IImagePickerConnector } from '../connectors/imagePicker/IImagePickerConnector';
import DummyWebView from '../connectors/webView/DummyWebView';

export class ProviderRegistry {
  set WebView(component: ComponentType) {
    this._WebView = component;
  }

  get WebView(): ComponentType {
    return this._WebView;
  }

  set imagePickerConnector(connector: IImagePickerConnector) {
    this._imagePickerConnector = connector;
  }

  get imagePickerConnector(): IImagePickerConnector {
    return this._imagePickerConnector;
  }

  private _WebView: ComponentType = DummyWebView;
  private _imagePickerConnector: IImagePickerConnector = new DummyImagePickerConnector();
}
