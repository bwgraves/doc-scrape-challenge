# smtpd_etrn_restrictions 


Optional restrictions that the Postfix SMTP server applies in the
context of a client ETRN command.
See SMTPD_ACCESS_README, section "Delayed evaluation of SMTP access
restriction lists" for a discussion of evaluation context and time.



The Postfix ETRN implementation accepts only destinations that are
eligible for the Postfix "fast flush" service. See the ETRN_README
file for details.



Specify a list of restrictions, separated by commas and/or whitespace.
Continue long lines by starting the next line with whitespace.
Restrictions are applied in the order as specified; the first
restriction that matches wins.



The following restrictions are specific to the domain name information
received with the ETRN command.




check_etrn_access type:table

Search the specified access database for the ETRN domain name
or its parent domains. See the access(5) manual page for details.





Other restrictions that are valid in this context:




Generic restrictions that can be used
in any SMTP command context, described under smtpd_client_restrictions.

SMTP command specific restrictions described under
smtpd_client_restrictions and smtpd_helo_restrictions.




Example:



<a href="postconf.5.html#smtpd_etrn_restrictions">smtpd_etrn_restrictions</a> = <a href="postconf.5.html#permit_mynetworks">permit_mynetworks</a>, reject



