# tls_random_prng_update_period 

 The time between attempts by tlsmgr(8) to save the state of
the pseudo random number generator (PRNG) to the file specified
with $tls_random_exchange_name.  

 Specify a non-zero time value (an integral value plus an optional
one-letter suffix that specifies the time unit).  Time units: s
(seconds), m (minutes), h (hours), d (days), w (weeks).
The default time unit is s (seconds).  

 This feature is available in Postfix 2.2 and later.  

