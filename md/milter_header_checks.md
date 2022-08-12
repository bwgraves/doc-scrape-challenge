# milter_header_checks 

 Optional lookup tables for content inspection of message headers
that are produced by Milter applications.  See the header_checks(5)
manual page available actions. Currently, PREPEND is not implemented.


 The following example sends all mail that is marked as SPAM to
a spam handling machine. Note that matches are case-insensitive
by default. 


/etc/postfix/<a href="postconf.5.html">main.cf</a>:
    <a href="postconf.5.html#milter_header_checks">milter_header_checks</a> = <a href="pcre_table.5.html">pcre</a>:/etc/postfix/<a href="postconf.5.html#milter_header_checks">milter_header_checks</a>



/etc/postfix/<a href="postconf.5.html#milter_header_checks">milter_header_checks</a>:
    /^X-SPAM-FLAG:\s+YES/ FILTER mysmtp:sanitizer.example.com:25


 The milter_header_checks mechanism could also be used for
allowlisting. For example it could be used to skip heavy content
inspection for DKIM-signed mail from known friendly domains. 

 This feature is available in Postfix 2.7, and as an optional
patch for Postfix 2.6. 


