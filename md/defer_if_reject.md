# defer_if_reject Defer the request if some later restriction would result in a
REJECT action.  This is useful when an allowlisting feature fails
due to a temporary problem.  This feature is available in Postfix
version 2.1 and later.  