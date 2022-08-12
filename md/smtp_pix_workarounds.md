# smtp_pix_workarounds  A list that specifies zero or more workarounds for CISCO PIX
firewall bugs. These workarounds are implemented by the Postfix
SMTP client. Workaround names are separated by comma or space, and
are case insensitive.  This parameter setting can be overruled with
per-destination smtp_pix_workaround_maps settings. 