import { QuillTheme } from '../components/Quill/interfaces/QuillTheme';
import { DummyImagePickerProvider } from '../providers/ImagePicker/Dummy/index';
import { IImagePickerProvider } from '../providers/ImagePicker/IImagePickerProvider';
import { IResourceProvider } from '../providers/Resource/IResourceProvider';
import { OnlineResourceProvider } from '../providers/Resource/Online/index';
import { DummyWebViewProvider } from '../providers/WebView/Dummy/index';
import { WebViewProvider } from '../providers/WebView/types/WebViewProvider';

export class ProviderRegistry {
  public WebViewProvider: WebViewProvider = DummyWebViewProvider;
  public ImagePickerProvider: IImagePickerProvider = new DummyImagePickerProvider();
  public ResourceProvider: new () => IResourceProvider = OnlineResourceProvider;
  public ThemeProvider: QuillTheme = QuillTheme.SNOW;
}
