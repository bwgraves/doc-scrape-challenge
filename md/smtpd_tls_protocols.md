# smtpd_tls_protocols 

 TLS protocols accepted by the Postfix SMTP server with opportunistic
TLS encryption. If the list is empty, the server supports all available
TLS protocol versions.  A non-empty value is a list of protocol names to
include or exclude, separated by whitespace, commas or colons.  

 The valid protocol names (see SSL_get_version(3)) are "SSLv2",
"SSLv3", "TLSv1", "TLSv1.1", "TLSv1.2" and "TLSv1.3".  Starting with
Postfix 3.6, the default value is "&gt;=TLSv1", which sets TLS 1.0 as
the lowest supported TLS protocol version (see below).  Older releases
use the "!" exclusion syntax, also described below.  

 As of Postfix 3.6, the preferred way to limit the range of
acceptable protocols is to set the lowest acceptable TLS protocol
version and/or the highest acceptable TLS protocol version.  To set the
lower bound include an element of the form: "&gt;=version" where
version is a either one of the TLS protocol names listed above,
or a hexadecimal number corresponding to the desired TLS protocol
version (0301 for TLS 1.0, 0302 for TLS 1.1, etc.).  For the upper
bound, use "&lt;=version".  There must be no whitespace between
the "&gt;=" or "&lt;=" symbols and the protocol name or number. 

 Hexadecimal protocol numbers make it possible to specify protocol
bounds for TLS versions that are known to OpenSSL, but might not be
known to Postfix.  They cannot be used with the legacy exclusion syntax.
Leading "0" or "0x" prefixes are supported, but not required.
Therefore, "301", "0301", "0x301" and "0x0301" are all equivalent to
"TLSv1".  Hexadecimal versions unknown to OpenSSL will fail to set the
upper or lower bound, and a warning will be logged.  Hexadecimal
versions should only be used when Postfix is linked with some future
version of OpenSSL that supports TLS 1.4 or later, but Postfix does not
yet support a symbolic name for that protocol version. 

Hexadecimal example (Postfix &ge; 3.6):


# Allow only TLS 1.0 through (hypothetical) TLS 1.4, once supported
# in some future version of OpenSSL (presently a warning is logged).
<a href="postconf.5.html#smtpd_tls_protocols">smtpd_tls_protocols</a> = &gt;=TLSv1, &lt;=0305
# Allow only TLS 1.0 and up:
<a href="postconf.5.html#smtpd_tls_protocols">smtpd_tls_protocols</a> = &gt;=0x0301



 With Postfix &lt; 3.6 there is no support for a minimum or maximum
version, and the protocol range is configured via protocol exclusions.
To require at least TLS 1.0, set "smtpd_tls_protocols = !SSLv2, !SSLv3".
Listing the protocols to include, rather than protocols to exclude, is
supported, but not recommended.  The exclusion form more accurately
matches the underlying OpenSSL interface.  

 Support for "TLSv1.3" was introduced in OpenSSL 1.1.1.  Disabling
this protocol via "!TLSv1.3" is supported since Postfix 3.4 (or patch
releases &ge; 3.0.14, 3.1.10, 3.2.7 and 3.3.2).  

 Example: 

# Preferred syntax with Postfix &ge; 3.6:
<a href="postconf.5.html#smtpd_tls_protocols">smtpd_tls_protocols</a> = &gt;=TLSv1, &lt;=TLSv1.3
# Legacy syntax:
<a href="postconf.5.html#smtpd_tls_protocols">smtpd_tls_protocols</a> = !SSLv2, !SSLv3


 This feature is available in Postfix 2.6 and later. 


