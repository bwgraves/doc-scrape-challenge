# always_add_missing_headers (default:no) 

 Always add (Resent-) From:, To:, Date: or Message-ID: headers
when not present.  Postfix 2.6 and later add these headers only
when clients match the local_header_rewrite_clients parameter
setting.  Earlier Postfix versions always add these headers; this
may break DKIM signatures that cover non-existent headers.
The undisclosed_recipients_header parameter setting determines
whether a To: header will be added. 


