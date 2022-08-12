# reject_plaintext_session Reject the request when the connection is not encrypted. This
restriction should not be used before the client has had a chance
to negotiate encryption with the AUTH or STARTTLS commands.

The plaintext_reject_code parameter specifies the response
code for rejected requests (default:  450).  This feature is available
in Postfix 2.3 and later. 