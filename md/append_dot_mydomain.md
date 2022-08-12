# append_dot_mydomain (default:Postfix&ge;3.0:no,Postfix&lt;3.0:yes) 


With locally submitted mail, append the string ".$mydomain" to
addresses that have no ".domain" information. With remotely submitted
mail, append the string ".$remote_header_rewrite_domain"
instead.



Note 1: this feature is enabled by default. If disabled, users will not be
able to send mail to "user@partialdomainname" but will have to
specify full domain names instead.


 Note 2: with Postfix version 2.2, message header address rewriting
happens only when one of the following conditions is true: 



 The message is received with the Postfix sendmail(1) command,

 The message is received from a network client that matches
$local_header_rewrite_clients,

 The message is received from the network, and the
remote_header_rewrite_domain parameter specifies a non-empty value.



 To get the behavior before Postfix version 2.2, specify
"local_header_rewrite_clients = static:all". 


