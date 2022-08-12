# message_strip_characters 

 The set of characters that Postfix will remove from message
content.  The usual C-like escape sequences are recognized: \a
\b \f \n \r \t \v \ddd (up to three octal digits) and
\\. 

 Note 1: this feature does not recognize text that requires MIME
decoding. It inspects raw message content, just like header_checks
and body_checks.  

 Note 2: this feature is disabled with "receive_override_options
= no_header_body_checks".  

 Example: 


<a href="postconf.5.html#message_strip_characters">message_strip_characters</a> = \0


 This feature is available in Postfix 2.3 and later.  


