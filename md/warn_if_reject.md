# warn_if_reject undefined;  A safety net for testing. When "warn_if_reject" is placed
before a reject-type restriction, access table query, or
check_policy_service query, this logs a "reject_warning" message
instead of rejecting a request (when a reject-type restriction fails
due to a temporary error, this logs a "reject_warning" message for
any implicit "defer_if_permit" actions that would normally prevent
mail from being accepted by some later access restriction). This
feature has no effect on defer_if_reject restrictions.  