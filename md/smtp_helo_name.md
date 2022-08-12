# smtp_helo_name (default:$; 


The hostname to send in the SMTP HELO or EHLO command.



The default value is the machine hostname.  Specify a hostname or
[ip.add.re.ss].



This information can be specified in the main.cf file for all SMTP
clients, or it can be specified in the master.cf file for a specific
client, for example:




/etc/postfix/<a href="master.5.html">master.cf</a>:
    mysmtp ... smtp -o <a href="postconf.5.html#smtp_helo_name">smtp_helo_name</a>=foo.bar.com




This feature is available in Postfix 2.0 and later.



