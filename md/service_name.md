# service_name (read-only) 

 The master.cf service name of a Postfix daemon process. This
can be used to distinguish the logging from different services that
use the same program name. 

 Example master.cf entries: 


# Distinguish inbound MTA logging from submission and smtps logging.
smtp      inet  n       -       n       -       -       smtpd
submission inet n       -       n       -       -       smtpd
    -o <a href="postconf.5.html#syslog_name">syslog_name</a>=postfix/$<a href="postconf.5.html#service_name">service_name</a>
smtps     inet  n       -       n       -       -       smtpd
    -o <a href="postconf.5.html#syslog_name">syslog_name</a>=postfix/$<a href="postconf.5.html#service_name">service_name</a>



# Distinguish outbound MTA logging from inbound relay logging.
smtp      unix  -       -       n       -       -       smtp
relay     unix  -       -       n       -       -       smtp
    -o <a href="postconf.5.html#syslog_name">syslog_name</a>=postfix/$<a href="postconf.5.html#service_name">service_name</a>



