# reject_unknown_client_hostname undefined; Reject the request when 1) the client IP address-&gt;name mapping
fails, or 2) the name-&gt;address mapping fails, or 3) the name-&gt;address
mapping does not match the client IP address.   This is a
stronger restriction than the reject_unknown_reverse_client_hostname
feature, which triggers only under condition 1) above.  The
unknown_client_reject_code parameter specifies the response code
for rejected requests (default: 450). The reply is always 450 in
case the address-&gt;name or name-&gt;address lookup failed due to
a temporary problem. 