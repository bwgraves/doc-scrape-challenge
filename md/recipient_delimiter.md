# recipient_delimiter (default:empty); 

 The set of characters that can separate an email address
localpart, user name, or a .forward file name from its extension.
For example, with "recipient_delimiter = +", the software tries
user+foo@example.com before trying user@example.com, user+foo before
trying user, and .forward+foo before trying .forward. 

 More formally, an email address localpart or user name is
separated from its extension by the first character that matches
the recipient_delimiter set. The delimiter character and extension
may then be used to generate an extended .forward file name. This
implementation recognizes one delimiter character and one extension
per email address localpart or email address. With Postfix 2.10 and
earlier, the recipient_delimiter specifies a single character. 

 See canonical(5), local(8), relocated(5) and virtual(5) for the
effects of recipient_delimiter on lookups in aliases, canonical,
virtual, and relocated maps, and see the propagate_unmatched_extensions
parameter for propagating an extension from one email address to
another.  

 When used in command_execution_directory, forward_path, or
luser_relay, ${recipient_delimiter} is replaced with the actual
recipient delimiter that was found in the recipient email address
(Postfix 2.11 and later), or it is replaced with the main.cf
recipient_delimiter parameter value (Postfix 2.10 and earlier).


 The recipient_delimiter is not applied to the mailer-daemon
address, the postmaster address, or the double-bounce address. With
the default "owner_request_special = yes" setting, the recipient_delimiter
is also not applied to addresses with the special "owner-" prefix
or the special "-request" suffix. 


Examples:



# Handle Postfix-style extensions.
<a href="postconf.5.html#recipient_delimiter">recipient_delimiter</a> = +



# Handle both Postfix and qmail extensions (Postfix 2.11 and later).
<a href="postconf.5.html#recipient_delimiter">recipient_delimiter</a> = +-



# Use .forward for mail without address extension, and for mail with
# an unrecognized address extension.
<a href="postconf.5.html#forward_path">forward_path</a> = $home/.forward${<a href="postconf.5.html#recipient_delimiter">recipient_delimiter</a>}${extension},
    $home/.forward



