package com.developer.swastikmishra.dinstagram;

import android.app.DownloadManager;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.net.http.SslError;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;
import android.webkit.SslErrorHandler;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final WebView myWebView = (WebView) findViewById(R.id.webview);
        myWebView.getSettings().setJavaScriptEnabled(true);
        myWebView.getSettings().setDomStorageEnabled(true);
        myWebView.setWebChromeClient(new WebChromeClient());
        myWebView.loadUrl("https://www.instagram.com");

        final WebView engine = (WebView) findViewById(R.id.webview);
        engine.setWebViewClient(new WebViewClient() {

            boolean loadingFinished = false;

            @Override
            public void onReceivedSslError (WebView view, SslErrorHandler handler, SslError error) {
                handler.proceed();
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                if (url.endsWith(".jpg")) {
                    Uri source = Uri.parse(url);
                    DownloadManager.Request request = new DownloadManager.Request(source);
                    request.setDescription("Downloading Instagram Image");
                    String[] title = url.split("/");
                    request.setTitle(title[title.length-1]);
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.HONEYCOMB) {
                        request.allowScanningByMediaScanner();
                        request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                    }
                    request.setDestinationInExternalPublicDir("DInstagram/", title[title.length-1]);
                    DownloadManager manager = (DownloadManager) getSystemService(Context.DOWNLOAD_SERVICE);
                    manager.enqueue(request);
                }
                return true;
            }

            @Override
            public void onPageFinished(WebView view, String url){
                if(loadingFinished ==  false){
                    loadingFinished = true;
                    String js = "var s = document.createElement( 'script' );s.setAttribute( 'src', 'https://rawgit.com/swastikmishra/dinstagram/master/DownloadButtonInjector.js' );document.body.appendChild( s );";
                    view.loadUrl("javascript: "+js+";");
                }
            }
        });

    }

}