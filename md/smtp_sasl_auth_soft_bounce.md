# smtp_sasl_auth_soft_bounce 

 When a remote SMTP server rejects a SASL authentication request
with a 535 reply code, defer mail delivery instead of returning
mail as undeliverable. The latter behavior was hard-coded prior to
Postfix version 2.5. 

 Note: the setting "yes" overrides the global soft_bounce
parameter, but the setting "no" does not. 

 Example: 


# Default as of Postfix 2.5
<a href="postconf.5.html#smtp_sasl_auth_soft_bounce">smtp_sasl_auth_soft_bounce</a> = yes
# The old hard-coded default
<a href="postconf.5.html#smtp_sasl_auth_soft_bounce">smtp_sasl_auth_soft_bounce</a> = no


 This feature is available in Postfix 2.5 and later. 


