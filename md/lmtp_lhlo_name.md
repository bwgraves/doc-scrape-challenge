# lmtp_lhlo_name 


The hostname to send in the LMTP LHLO command.



The default value is the machine hostname.  Specify a hostname or
[ip.add.re.ss] or [ip:v6:add:re::ss].



This information can be specified in the main.cf file for all LMTP
clients, or it can be specified in the master.cf file for a specific
client, for example:




/etc/postfix/<a href="master.5.html">master.cf</a>:
    mylmtp ... lmtp -o <a href="postconf.5.html#lmtp_lhlo_name">lmtp_lhlo_name</a>=foo.bar.com




This feature is available in Postfix 2.3 and later.



