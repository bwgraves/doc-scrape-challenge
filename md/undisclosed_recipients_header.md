# undisclosed_recipients_header (default:see"postconf-d"output) 


Message header that the Postfix cleanup(8) server inserts when a
message contains no To: or Cc: message header. With Postfix 2.8
and later, the default value is empty. With Postfix 2.4-2.7,
specify an empty value to disable this feature.  

 Example: 


# Default value before Postfix 2.8.
# Note: the ":" and ";" are both required.
<a href="postconf.5.html#undisclosed_recipients_header">undisclosed_recipients_header</a> = To: undisclosed-recipients:;



