# reject_unknown_recipient_domain undefined; Reject the request when Postfix is not final destination for
the recipient domain, and the RCPT TO domain has 1) no DNS MX and
no DNS A
record or 2) a malformed MX record such as a record with
a zero-length MX hostname (Postfix version 2.3 and later).  The
reply is specified with the unknown_address_reject_code parameter
(default: 450), unknown_address_tempfail_action (default:
defer_if_permit), or 556 (nullmx, Postfix 3.0 and
later). See the respective parameter descriptions for details.
