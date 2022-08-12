# smtpd_command_filter 

 A mechanism to transform commands from remote SMTP clients.
This is a last-resort tool to work around client commands that break
interoperability with the Postfix SMTP server.  Other uses involve
fault injection to test Postfix's handling of invalid commands.


 Specify the name of a "type:table" lookup table. The search
string is the SMTP command as received from the remote SMTP client,
except that initial whitespace and the trailing &lt;CR&gt;&lt;LF&gt;
are removed.  The result value is executed by the Postfix SMTP
server.  

 There is no need to use smtpd_command_filter for the following
cases: 



  Use "resolve_numeric_domain = yes" to accept
"user@ipaddress". 

  Postfix already accepts the correct form
"user@[ipaddress]". Use virtual_alias_maps or canonical_maps
to translate these into domain names if necessary.  

  Use "strict_rfc821_envelopes = no" to accept "RCPT TO:&lt;User
Name &lt;user@example.com&gt;&gt;". Postfix will ignore the "User
Name" part and deliver to the &lt;user@example.com&gt; address.




 Examples of problems that can be solved with the smtpd_command_filter
feature: 


/etc/postfix/<a href="postconf.5.html">main.cf</a>:
    <a href="postconf.5.html#smtpd_command_filter">smtpd_command_filter</a> = <a href="pcre_table.5.html">pcre</a>:/etc/postfix/command_filter



/etc/postfix/command_filter:
    # Work around clients that send malformed HELO commands.
    /^HELO\s*$/ HELO domain.invalid



    # Work around clients that send empty lines.
    /^\s*$/     NOOP



    # Work around clients that send RCPT TO:&lt;'user@domain'&gt;.
    # WARNING: do not lose the parameters that follow the address.
    /^(RCPT\s+TO:\s*&lt;)'([^[:space:]]+)'(&gt;.*)/     $1$2$3



    # Append XVERP to MAIL FROM commands to request VERP-style delivery.
    # See <a href="VERP_README.html">VERP_README</a> for more information on how to use Postfix VERP.
    /^(MAIL\s+FROM:\s*&lt;listname@example\.com&gt;.*)/   $1 XVERP



    # Bounce-never mail sink. Use <a href="postconf.5.html#notify_classes">notify_classes</a>=bounce,resource,software
    # to send bounced mail to the postmaster (with message body removed).
    /^(RCPT\s+TO:\s*&lt;.*&gt;.*)\s+NOTIFY=\S+(.*)/     $1 NOTIFY=NEVER$2
    /^(RCPT\s+TO:.*)/                             $1 NOTIFY=NEVER


 This feature is available in Postfix 2.7. 


