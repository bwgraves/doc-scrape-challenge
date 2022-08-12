# smtpd_policy_service_default_action 

 The default action when an SMTPD policy service request fails.
Specify "DUNNO" to behave as if the failed  SMTPD policy service
request was not sent, and to continue processing other access
restrictions, if any. 

 Limitations: 



   This parameter may specify any value that would be a valid
SMTPD policy server response (or access(5) map lookup result).  An
access(5) map or policy server in this parameter value may need to
be declared in advance with a restriction_class setting.  

  If the specified action invokes another check_policy_service
request, that request will have the built-in default action. 



 This feature is available in Postfix 3.0 and later. 


