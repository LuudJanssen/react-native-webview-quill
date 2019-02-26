import { WebView as ReactNativeWebView, WebViewProps } from 'react-native';
import { WebView as CommunityWebView } from 'react-native-webview';

// We have to do this because react-native webview and react-native's Uri Source schema's aren't compatible
interface ICombinedWebViewProps extends WebViewProps {
  source: any;
}

export type WebViewProvider = new (props: ICombinedWebViewProps) =>
  | ReactNativeWebView
  | CommunityWebView;
