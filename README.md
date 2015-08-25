# Browser_Feature_Detection
Sample code for browser feature detection

This is sample code to help HTML/Javascript Developer feature detect for Dolby Digital Plus support on Browsers

Please note that Browsers can give false positives results whether or not a feature is supported. This Sample Code plays a "silence.mp4" file. If the file is successful, then the browser supports Dolby Digital Plus encoded content. If the file fails, then the browser does not support Dolby Digital Plus encoded content

Since not all browsers support Dolby, you will want to fallback when necessary
If (browser supports Dolby Digital Plus Format)
  {
  downstream Dolby Digital Plus
  }
Else 
  {
  downstream another audio file format
  }
