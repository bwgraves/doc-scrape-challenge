# tls_ssl_options 

 List or bit-mask of OpenSSL options to enable. 

 The OpenSSL toolkit provides a set of options that applications
can enable to tune the OpenSSL behavior.  Some of these work around
bugs in other implementations and are on by default.  You can use
the tls_disable_workarounds parameter to selectively disable some
or all of the bug work-arounds, making OpenSSL more strict at the
cost of non-interoperability with SSL clients or servers that exhibit
the bugs.  

 Other options are off by default, and typically enable or disable
features rather than bug work-arounds.  These may be turned on (with
care) via the tls_ssl_options parameter.  The value is a white-space
or comma separated list of named options chosen from the list below.
The names are not case-sensitive, you can use lower-case if you
prefer.  The upper case values below match the corresponding macro
name in the ssl.h header file with the SSL_OP_ prefix removed.  It
is possible that your OpenSSL version includes new options added
after your Postfix source code was last updated, in that case you
can only enable one of these via the hexadecimal syntax below.  

 You should only enable features via the hexadecimal mask when
the need to control the feature is critical (to deal with a new
vulnerability or a serious interoperability problem).  Postfix DOES
NOT promise backwards compatible behavior with respect to the mask
bits.  A feature enabled via the mask in one release may be enabled
by other means in a later release, and the mask bit will then be
ignored.  Therefore, use of the hexadecimal mask is only a temporary
measure until a new Postfix or OpenSSL release provides a better
solution.  

 If the value of the parameter is a hexadecimal long integer
starting with "0x", the options corresponding to the bits specified
in its value are enabled (see openssl/ssl.h and SSL_CTX_set_options(3)).
You can only enable options not already controlled by other Postfix
settings.  For example, you cannot disable protocols or enable
server cipher preference.  Do not attempt to enable all features by
specifying 0xFFFFFFFF, this is unlikely to be a good idea.  Some
bug work-arounds are also valid here, allowing them to be re-enabled
if/when they're no longer enabled by default.  The supported values
include: 



ENABLE_MIDDLEBOX_COMPAT Postfix &ge; 3.4. See
SSL_CTX_set_options(3).

LEGACY_SERVER_CONNECT See SSL_CTX_set_options(3).

NO_TICKET Enabled by default when needed in
fully-patched Postfix &ge; 2.7.  Not needed at all for Postfix &ge;
2.11, unless for some reason you do not want to support TLS session
resumption.  Best not set explicitly.  See SSL_CTX_set_options(3).

NO_COMPRESSION Disable SSL compression even if
supported by the OpenSSL library.  Compression is CPU-intensive,
and compression before encryption does not always improve security.  

NO_RENEGOTIATION Postfix &ge; 3.4.  This can
reduce opportunities for a potential CPU exhaustion attack.  See
SSL_CTX_set_options(3).

NO_SESSION_RESUMPTION_ON_RENEGOTIATION Postfix
&ge; 3.4. See SSL_CTX_set_options(3).

PRIORITIZE_CHACHA Postfix &ge; 3.4. See SSL_CTX_set_options(3).



 This feature is available in Postfix 2.11 and later.  


