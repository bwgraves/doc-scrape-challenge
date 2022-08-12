# internal_mail_filter_classes 

 What categories of Postfix-generated mail are subject to
before-queue content inspection by non_smtpd_milters, header_checks
and body_checks.  Specify zero or more of the following, separated
by whitespace or comma.  



bounce  Inspect the content of delivery
status notifications. 

notify  Inspect the content of postmaster
notifications by the smtp(8) and smtpd(8) processes. 



 NOTE: It's generally not safe to enable content inspection of
Postfix-generated email messages. The user is warned. 

 This feature is available in Postfix 2.3 and later. 

