# defer undefined Defer the request. The client is told to try again later. This
restriction is useful at the end of a restriction list, to make
the default policy explicit.  The defer_code parameter specifies
the SMTP server reply code (default: 450).