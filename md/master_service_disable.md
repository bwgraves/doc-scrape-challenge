# master_service_disable (default:empty) 

 Selectively disable master(8) listener ports by service type
or by service name and type.  Specify a list of service types
("inet", "unix", "fifo", or "pass") or "name/type" tuples, where
"name" is the first field of a master.cf entry and "type" is a
service type. As with other Postfix matchlists, a search stops at
the first match.  Specify "!pattern" to exclude a service from the
list. By default, all master(8) listener ports are enabled.  

 Note: this feature does not support "/file/name" or "type:table"
patterns, nor does it support wildcards such as "*" or "all". This
is intentional. 

 Examples: 


# With Postfix 2.6..2.10 use '.' instead of '/'.
# Turn on all <a href="master.8.html">master(8)</a> listener ports (the default).
<a href="postconf.5.html#master_service_disable">master_service_disable</a> =
# Turn off only the main SMTP listener port.
<a href="postconf.5.html#master_service_disable">master_service_disable</a> = smtp/inet
# Turn off all TCP/IP listener ports.
<a href="postconf.5.html#master_service_disable">master_service_disable</a> = inet
# Turn off all TCP/IP listener ports except "foo".
<a href="postconf.5.html#master_service_disable">master_service_disable</a> = !foo/inet, inet


 This feature is available in Postfix 2.6 and later. 


