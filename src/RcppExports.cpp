// Generated by using Rcpp::compileAttributes() -> do not edit by hand
// Generator token: 10BE3573-1514-4C36-9D1C-5A225CD40393

#include <Rcpp.h>

using namespace Rcpp;

// themes_to_js
String themes_to_js(String x);
RcppExport SEXP _waiter_themes_to_js(SEXP xSEXP) {
BEGIN_RCPP
    Rcpp::RObject rcpp_result_gen;
    Rcpp::RNGScope rcpp_rngScope_gen;
    Rcpp::traits::input_parameter< String >::type x(xSEXP);
    rcpp_result_gen = Rcpp::wrap(themes_to_js(x));
    return rcpp_result_gen;
END_RCPP
}

static const R_CallMethodDef CallEntries[] = {
    {"_waiter_themes_to_js", (DL_FUNC) &_waiter_themes_to_js, 1},
    {NULL, NULL, 0}
};

RcppExport void R_init_waiter(DllInfo *dll) {
    R_registerRoutines(dll, NULL, CallEntries, NULL, NULL);
    R_useDynamicSymbols(dll, FALSE);
}