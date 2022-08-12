# sendmail_fix_line_endings (default:always) 

 Controls how the Postfix sendmail command converts email message
line endings from &lt;CR&gt;&lt;LF&gt; into UNIX format (&lt;LF&gt;).




 always   Always convert message lines ending
in &lt;CR&gt;&lt;LF&gt;. This setting is the default with Postfix
2.9 and later. 

 strict   Convert message lines ending in
&lt;CR&gt;&lt;LF&gt; only if the first input line ends in
&lt;CR&gt;&lt;LF&gt;. This setting is backwards-compatible with
Postfix 2.8 and earlier. 

 never   Never convert message lines ending in
&lt;CR&gt;&lt;LF&gt;. This setting exists for completeness only.




 This feature is available in Postfix 2.9 and later. 


