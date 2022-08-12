# allow_percent_hack (default:yes) 


Enable the rewriting of the form "user%domain" to "user@domain".
This is enabled by default.


 Note: as of Postfix version 2.2, message header address rewriting
happens only when one of the following conditions is true: 



 The message is received with the Postfix sendmail(1) command,

 The message is received from a network client that matches
$local_header_rewrite_clients,

 The message is received from the network, and the
remote_header_rewrite_domain parameter specifies a non-empty value.



 To get the behavior before Postfix version 2.2, specify
"local_header_rewrite_clients = static:all". 


Example:



<a href="postconf.5.html#allow_percent_hack">allow_percent_hack</a> = no



