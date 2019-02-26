import { DummyImagePickerProvider } from '../providers/ImagePicker/Dummy/index';
import { IImagePickerProvider } from '../providers/ImagePicker/IImagePickerProvider';
import { IResourceProvider } from '../providers/Resource/IResourceProvider';
import { OnlineResourceProvider } from '../providers/Resource/Online/index';
import { DummyWebViewProvider } from '../providers/WebView/Dummy/index';
import { WebViewProvider } from '../providers/WebView/types/WebViewProvider';

export class ProviderRegistry {
  set WebViewProvider(provider: WebViewProvider) {
    this.WebView = provider;
  }

  get WebViewProvider(): WebViewProvider {
    return this.WebView;
  }

  set ImagePickerProvider(provider: IImagePickerProvider) {
    this.ImagePicker = provider;
  }

  get ImagePickerProvider(): IImagePickerProvider {
    return this.ImagePicker;
  }

  set ResourceProvider(provider: new () => IResourceProvider) {
    this.Resource = provider;
  }

  get ResourceProvider(): new () => IResourceProvider {
    return this.Resource;
  }

  private WebView: WebViewProvider = DummyWebViewProvider;
  private ImagePicker: IImagePickerProvider = new DummyImagePickerProvider();
  private Resource: new () => IResourceProvider = OnlineResourceProvider;
}
