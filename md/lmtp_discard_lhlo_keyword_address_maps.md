# lmtp_discard_lhlo_keyword_address_maps (default:empty); 

 Lookup tables, indexed by the remote LMTP server address, with
case insensitive lists of LHLO keywords (pipelining, starttls,
auth, etc.) that the Postfix LMTP client will ignore in the LHLO
response
from a remote LMTP server. See lmtp_discard_lhlo_keywords for
details. The table is not indexed by hostname for consistency with
smtpd_discard_ehlo_keyword_address_maps. 

 This feature is available in Postfix 2.3 and later. 


