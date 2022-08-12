# lmtp_discard_lhlo_keywords (default:empty) 

 A case insensitive list of LHLO keywords (pipelining, starttls,
auth, etc.) that the Postfix LMTP client will ignore in the LHLO
response
from a remote LMTP server. 

 This feature is available in Postfix 2.3 and later. 

 Notes: 



  Specify the silent-discard pseudo keyword to prevent
this action from being logged. 

  Use the lmtp_discard_lhlo_keyword_address_maps feature to
discard LHLO keywords selectively. 




