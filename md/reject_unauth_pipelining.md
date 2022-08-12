# reject_unauth_pipelining undefined Reject the request when the client sends SMTP commands ahead
of time where it is not allowed, or when the client sends SMTP
commands ahead of time without knowing that Postfix actually supports
ESMTP command pipelining. This stops mail from bulk mail software
that improperly uses ESMTP command pipelining in order to speed up
deliveries.
 With Postfix 2.6 and later, the SMTP server sets a per-session
flag whenever it detects illegal pipelining, including pipelined
HELO or EHLO commands. The reject_unauth_pipelining feature simply
tests whether the flag was set at any point in time during the
session.
 With older Postfix versions, reject_unauth_pipelining checks
the current status of the input read queue, and its usage is not
recommended in contexts other than smtpd_data_restrictions.  