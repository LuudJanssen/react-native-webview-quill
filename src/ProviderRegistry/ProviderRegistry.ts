import { DummyImagePickerProvider } from '../providers/imagePicker/DummyImagePickerProvider';
import { IImagePickerProvider } from '../providers/imagePicker/IImagePickerProvider';
import IResourceProvider from '../providers/resource/IResourceProvider';
import OnlineResourceProvider from '../providers/resource/OnlineResourceProvider';
import DummyWebViewProvider from '../providers/webView/DummyWebViewProvider';
import { WebViewProvider } from '../providers/webView/WebViewProvider';

export class ProviderRegistry {
  set WebViewProvider(provider: WebViewProvider) {
    this._WebViewProvider = provider;
  }

  get WebViewProvider(): WebViewProvider {
    return this._WebViewProvider;
  }

  set imagePickerProvider(provider: IImagePickerProvider) {
    this._imagePickerProvider = provider;
  }

  get imagePickerProvider(): IImagePickerProvider {
    return this._imagePickerProvider;
  }

  set ResourceProvider(provider: new () => IResourceProvider) {
    this._resourceProvider = provider;
  }

  get ResourceProvider(): new () => IResourceProvider {
    return this._resourceProvider;
  }

  private _WebViewProvider: WebViewProvider = DummyWebViewProvider;
  private _imagePickerProvider: IImagePickerProvider = new DummyImagePickerProvider();
  private _resourceProvider: new () => IResourceProvider = OnlineResourceProvider;
}
