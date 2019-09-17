import { QuillOptionsStatic } from 'quill';
import Delta from 'quill-delta';
import * as React from 'react';
import { ActivityIndicator, View, ViewStyle, WebView as ReactNativeWebView } from 'react-native';
import { WebView as CommunityWebView } from 'react-native-webview';
import { WebViewMessageEvent } from 'react-native-webview/lib/WebViewTypes';
import { providerRegistry } from '../../ProviderRegistry/index';
import { EventType, IMessage } from './interfaces/IMessage';
import { generateWebViewIndex } from './resources/generateWebViewIndex';

interface IProps {
  accessibilityLabel?: string;
  containerStyle?: ViewStyle;
  content?: Delta;
  onContentChange?: (content: Delta) => any;
  options?: QuillOptionsStatic;
}

interface IState {
  html: string | null;
}

const defaultOptions: QuillOptionsStatic = {
  theme: 'snow',
};

type WebViewRef = ReactNativeWebView | CommunityWebView | null;

export class Quill extends React.Component<IProps, IState> {
  private WebViewComponent = providerRegistry.WebViewProvider;
  private ResourceProvider = new providerRegistry.ResourceProvider();
  private ThemeProvider = providerRegistry.ThemeProvider;
  private webView: WebViewRef = null;

  private fullHeightStyle: ViewStyle = {
    flex: 1,
  };

  private webViewStyle: ViewStyle = {
    ...this.fullHeightStyle,
    backgroundColor: 'rgba(0,0,0,0)',
  };

  constructor(props: any) {
    super(props);
    this.state = {
      html: null,
    };

    this.onMessage = this.onMessage.bind(this);
    this.loadResources();
  }

  public shouldComponentUpdate(newProps: IProps, newState: IState) {
    if (newProps.content !== this.props.content) {
      this.sendMessage(EventType.CONTENT_CHANGE, newProps.content);
    }

    return (
      newState.html !== this.state.html || newProps.containerStyle != this.props.containerStyle
    );
  }

  public render() {
    return (
      <View accessibilityLabel={this.props.accessibilityLabel} style={this.props.containerStyle}>
        {this.state.html === null ? (
          <ActivityIndicator size="large" style={this.fullHeightStyle} />
        ) : (
          <this.WebViewComponent
            javaScriptEnabled={true}
            onMessage={this.onMessage}
            ref={this.registerWebView}
            useWebKit={true}
            scalesPageToFit={false}
            source={{ html: this.state.html }}
            style={this.webViewStyle}
          />
        )}
      </View>
    );
  }

  private registerWebView(webView: WebViewRef) {
    this.webView = webView;
  }

  private async loadResources(): Promise<void> {
    const scriptRequest = this.ResourceProvider.getQuillScript();
    const styleSheetRequest = this.ResourceProvider.getQuillStyleSheet(this.ThemeProvider);

    const [script, styleSheet] = await Promise.all([scriptRequest, styleSheetRequest]);
    const options = {
      ...defaultOptions,
      ...this.props.options,
    };

    this.setState({
      html: generateWebViewIndex({ script, styleSheet }, this.props.content, options),
    });
  }

  private sendMessage(type: EventType, data?: any) {
    if (this.webView) {
      this.webView.postMessage(JSON.stringify({ type, data }));
    }
  }

  private processMessage(message: IMessage) {
    const { type, data } = message;

    switch (type) {
      case EventType.CONTENT_CHANGE:
        return this.props.onContentChange && this.props.onContentChange(data);
    }
  }

  private onMessage(event: WebViewMessageEvent) {
    try {
      // TODO: Implement only sending delta's to save time on JSON parsing overhead
      this.processMessage(JSON.parse(event.nativeEvent.data));
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.warn('Ignoring unprocessable event from Quill WebView due to error: ', error);
    }
  }
}
