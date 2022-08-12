# reject_unknown_reverse_client_hostname undefined; Reject the request when the client IP address has no address-&gt;name
mapping.  This is a weaker restriction than the
reject_unknown_client_hostname feature, which requires not only
that the address-&gt;name and name-&gt;address mappings exist, but
also that the two mappings reproduce the client IP address.  
The unknown_client_reject_code parameter specifies the response
code for rejected requests (default: 450).  The reply is always 450
in case the address-&gt;name lookup failed due to a temporary
problem.  This feature is available in Postfix 2.3 and
later.  