# authorized_submit_users (default: 


List of users who are authorized to submit mail with the sendmail(1)
command (and with the privileged postdrop(1) helper command).



By default, all users are allowed to submit mail.  Otherwise, the
real UID of the process is looked up in the system password file,
and access is granted only if the corresponding login name is on
the access list.  The username "unknown" is used for processes
whose real UID is not found in the password file. To deny mail
submission access to all users specify an empty list.  


Specify a list of user names, "/file/name" or "type:table" patterns,
separated by commas and/or whitespace. The list is matched left to right,
and the search stops on the first match. A "/file/name" pattern is
replaced by its contents;
a "type:table" lookup table is matched when a name matches a lookup key
(the lookup result is ignored).  Continue long lines by starting the
next line with whitespace. Specify "!pattern" to exclude a user
name from the list. The form "!/file/name" is supported only in
Postfix version 2.4 and later.  


Example:



<a href="postconf.5.html#authorized_submit_users">authorized_submit_users</a> = !www, <a href="DATABASE_README.html#types">static</a>:all



This feature is available in Postfix 2.2 and later.



