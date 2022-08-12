# smtpd_restriction_classes 


User-defined aliases for groups of access restrictions. The aliases
can be specified in smtpd_recipient_restrictions etc., and on the
right-hand side of a Postfix access(5) table.



One major application is for implementing per-recipient UCE control.
See the RESTRICTION_CLASS_README document for other examples.



