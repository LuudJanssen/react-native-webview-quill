import { WebView, WebViewProps } from 'react-native';

export type WebViewType = new (props: WebViewProps) => WebView;
