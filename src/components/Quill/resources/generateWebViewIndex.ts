import { QuillOptionsStatic } from 'quill';
import { DeltaStatic } from 'quill-delta';
import { EventType } from '../interfaces/IMessage';
import { IResources } from '../interfaces/IResources';

/* This file contains HTML for the webview that contains Quill. You can use the es6-string-html, es6-string-css and 
   es6-string-javascript plugins for VSCode to get syntax highlighting on this file.
   
   We input all EventType.{...} occurrences as variables in the template strings to enable type analysis for the event
   types, since they might be change sensitive. */

export function generateWebViewIndex(resources: IResources, content: DeltaStatic | undefined) {
  return encodeURIComponent(/*html*/ `
    <!DOCTYPE html>
    <html>
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css" integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.js" integrity="sha384-JiKN5O8x9Hhs/UE5cT5AAJqieYlOZbGT3CHws/y97o3ty4R7/O5poG9F3JoiOYw1" crossorigin="anonymous"></script>
        <style>
          html,
          body {
            margin: 0;
            padding: 0;
            height: 100%;
          }

          .quill-editor {
            height: 100%;
            width: 100%;
          }
        </style>

        <style>
          ${resources.styleSheet}
        </style>
      </head>
      <body>
      <script src="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/contrib/mathtex-script-type.min.js" integrity="sha384-LJ2FmexL77rmGm6SIpxq7y+XA6bkLzGZEgCywzKOZG/ws4va9fUVu2neMjvc3zdv"></script>
        <div id="editor" class="quill-editor"></div>

        <script>
          ${resources.script};
        </script>

        <script>
          function sendMessage(type, data) {
            const message = JSON.stringify({ type, data });

            // window.ReactNativeWebView is used by the react-native-community/react-native-webview package
            if (window.ReactNativeWebView) {
              window.ReactNativeWebView.postMessage(message);
            } else {
              window.postMessage(message);
            }
          }

          function onContentChange(data) {
            editor.setContents(data);
          }

          function processMessage(message) {
            const { type, data } = message;

            switch (type) {
              case ${EventType.CONTENT_CHANGE}:
                return onContentChange(data);
            }
          }

          function onMessage(event) {
            try {
              // TODO: Implement only sending delta's to save time on JSON parsing overhead
              processMessage(JSON.parse(event.data));
            } catch (error) {
              console.warn('Ignoring unprocessable event from React Native to Quill WebView due to error: ', error);
            }
          }

          function bindMessageHandler() {
            window.addEventListener('message', onMessage);
            window.onmessage = onMessage
          }

          /* Create the Quill editor */
          const editor = new Quill('#editor', {
            theme: 'snow'
          });

          /* Set the initial content */
          editor.setContents(${JSON.stringify(content)})

          /* Send a message when the text changes */
          editor.on('text-change', function() {
            sendMessage(${EventType.CONTENT_CHANGE}, editor.getContents());
          });

          bindMessageHandler();
        </script>
      </body>
    </html>
  `);
}
