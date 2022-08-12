# mail_spool_directory 


The directory where local(8) UNIX-style mailboxes are kept. The
default setting depends on the system type. Specify a name ending
in / for maildir-style delivery.



Note: maildir delivery is done with the privileges of the recipient.
If you use the mail_spool_directory setting for maildir style
delivery, then you must create the top-level maildir directory in
advance. Postfix will not create it.



Examples:



<a href="postconf.5.html#mail_spool_directory">mail_spool_directory</a> = /var/mail
<a href="postconf.5.html#mail_spool_directory">mail_spool_directory</a> = /var/spool/mail



