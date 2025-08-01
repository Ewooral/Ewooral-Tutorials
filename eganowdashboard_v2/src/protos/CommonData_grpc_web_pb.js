/**
 * @fileoverview gRPC-Web generated client stub for Commondata
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.23.3
// source: CommonData.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.Commondata = require('./CommonData_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Commondata.CommonDataSvcClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Commondata.CommonDataSvcPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Commondata.EmptyCommonDataMessage,
 *   !proto.Commondata.CountryListResponseMessage>}
 */
const methodDescriptor_CommonDataSvc_GetReceivingOperatingCountries = new grpc.web.MethodDescriptor(
  '/Commondata.CommonDataSvc/GetReceivingOperatingCountries',
  grpc.web.MethodType.UNARY,
  proto.Commondata.EmptyCommonDataMessage,
  proto.Commondata.CountryListResponseMessage,
  /**
   * @param {!proto.Commondata.EmptyCommonDataMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Commondata.CountryListResponseMessage.deserializeBinary
);


/**
 * @param {!proto.Commondata.EmptyCommonDataMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Commondata.CountryListResponseMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Commondata.CountryListResponseMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Commondata.CommonDataSvcClient.prototype.getReceivingOperatingCountries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetReceivingOperatingCountries',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetReceivingOperatingCountries,
      callback);
};


/**
 * @param {!proto.Commondata.EmptyCommonDataMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Commondata.CountryListResponseMessage>}
 *     Promise that resolves to the response
 */
proto.Commondata.CommonDataSvcPromiseClient.prototype.getReceivingOperatingCountries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetReceivingOperatingCountries',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetReceivingOperatingCountries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Commondata.EmptyCommonDataMessage,
 *   !proto.Commondata.CountryListResponseMessage>}
 */
const methodDescriptor_CommonDataSvc_GetSenderAllCountries = new grpc.web.MethodDescriptor(
  '/Commondata.CommonDataSvc/GetSenderAllCountries',
  grpc.web.MethodType.UNARY,
  proto.Commondata.EmptyCommonDataMessage,
  proto.Commondata.CountryListResponseMessage,
  /**
   * @param {!proto.Commondata.EmptyCommonDataMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Commondata.CountryListResponseMessage.deserializeBinary
);


/**
 * @param {!proto.Commondata.EmptyCommonDataMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Commondata.CountryListResponseMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Commondata.CountryListResponseMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Commondata.CommonDataSvcClient.prototype.getSenderAllCountries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetSenderAllCountries',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetSenderAllCountries,
      callback);
};


/**
 * @param {!proto.Commondata.EmptyCommonDataMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Commondata.CountryListResponseMessage>}
 *     Promise that resolves to the response
 */
proto.Commondata.CommonDataSvcPromiseClient.prototype.getSenderAllCountries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetSenderAllCountries',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetSenderAllCountries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Commondata.CountryRequestMessage,
 *   !proto.Commondata.PaymentAcctTypesAndServicesListResponseMessage>}
 */
const methodDescriptor_CommonDataSvc_GetPaymentTypeForSourceAccountsForSelectedCountry = new grpc.web.MethodDescriptor(
  '/Commondata.CommonDataSvc/GetPaymentTypeForSourceAccountsForSelectedCountry',
  grpc.web.MethodType.UNARY,
  proto.Commondata.CountryRequestMessage,
  proto.Commondata.PaymentAcctTypesAndServicesListResponseMessage,
  /**
   * @param {!proto.Commondata.CountryRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Commondata.PaymentAcctTypesAndServicesListResponseMessage.deserializeBinary
);


/**
 * @param {!proto.Commondata.CountryRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Commondata.PaymentAcctTypesAndServicesListResponseMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Commondata.PaymentAcctTypesAndServicesListResponseMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Commondata.CommonDataSvcClient.prototype.getPaymentTypeForSourceAccountsForSelectedCountry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetPaymentTypeForSourceAccountsForSelectedCountry',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetPaymentTypeForSourceAccountsForSelectedCountry,
      callback);
};


/**
 * @param {!proto.Commondata.CountryRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Commondata.PaymentAcctTypesAndServicesListResponseMessage>}
 *     Promise that resolves to the response
 */
proto.Commondata.CommonDataSvcPromiseClient.prototype.getPaymentTypeForSourceAccountsForSelectedCountry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetPaymentTypeForSourceAccountsForSelectedCountry',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetPaymentTypeForSourceAccountsForSelectedCountry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Commondata.CountryRequestMessage,
 *   !proto.Commondata.PaymentAcctTypesAndServicesListResponseMessage>}
 */
const methodDescriptor_CommonDataSvc_GetPaymentTypeForBeneficiaryAccountsForSelectedCountry = new grpc.web.MethodDescriptor(
  '/Commondata.CommonDataSvc/GetPaymentTypeForBeneficiaryAccountsForSelectedCountry',
  grpc.web.MethodType.UNARY,
  proto.Commondata.CountryRequestMessage,
  proto.Commondata.PaymentAcctTypesAndServicesListResponseMessage,
  /**
   * @param {!proto.Commondata.CountryRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Commondata.PaymentAcctTypesAndServicesListResponseMessage.deserializeBinary
);


/**
 * @param {!proto.Commondata.CountryRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Commondata.PaymentAcctTypesAndServicesListResponseMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Commondata.PaymentAcctTypesAndServicesListResponseMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Commondata.CommonDataSvcClient.prototype.getPaymentTypeForBeneficiaryAccountsForSelectedCountry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetPaymentTypeForBeneficiaryAccountsForSelectedCountry',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetPaymentTypeForBeneficiaryAccountsForSelectedCountry,
      callback);
};


/**
 * @param {!proto.Commondata.CountryRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Commondata.PaymentAcctTypesAndServicesListResponseMessage>}
 *     Promise that resolves to the response
 */
proto.Commondata.CommonDataSvcPromiseClient.prototype.getPaymentTypeForBeneficiaryAccountsForSelectedCountry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetPaymentTypeForBeneficiaryAccountsForSelectedCountry',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetPaymentTypeForBeneficiaryAccountsForSelectedCountry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Commondata.SendingAmountRequestMessage,
 *   !proto.Commondata.CurrenciesListRequestMessage>}
 */
const methodDescriptor_CommonDataSvc_GetCurrenciesForSendingAmount = new grpc.web.MethodDescriptor(
  '/Commondata.CommonDataSvc/GetCurrenciesForSendingAmount',
  grpc.web.MethodType.UNARY,
  proto.Commondata.SendingAmountRequestMessage,
  proto.Commondata.CurrenciesListRequestMessage,
  /**
   * @param {!proto.Commondata.SendingAmountRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Commondata.CurrenciesListRequestMessage.deserializeBinary
);


/**
 * @param {!proto.Commondata.SendingAmountRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Commondata.CurrenciesListRequestMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Commondata.CurrenciesListRequestMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Commondata.CommonDataSvcClient.prototype.getCurrenciesForSendingAmount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetCurrenciesForSendingAmount',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetCurrenciesForSendingAmount,
      callback);
};


/**
 * @param {!proto.Commondata.SendingAmountRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Commondata.CurrenciesListRequestMessage>}
 *     Promise that resolves to the response
 */
proto.Commondata.CommonDataSvcPromiseClient.prototype.getCurrenciesForSendingAmount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetCurrenciesForSendingAmount',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetCurrenciesForSendingAmount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Commondata.CurrenExchRateRequestMessage,
 *   !proto.Commondata.CurrenExchRateRequestMessage>}
 */
const methodDescriptor_CommonDataSvc_GetCurrenciesExchangeRate = new grpc.web.MethodDescriptor(
  '/Commondata.CommonDataSvc/GetCurrenciesExchangeRate',
  grpc.web.MethodType.UNARY,
  proto.Commondata.CurrenExchRateRequestMessage,
  proto.Commondata.CurrenExchRateRequestMessage,
  /**
   * @param {!proto.Commondata.CurrenExchRateRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Commondata.CurrenExchRateRequestMessage.deserializeBinary
);


/**
 * @param {!proto.Commondata.CurrenExchRateRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Commondata.CurrenExchRateRequestMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Commondata.CurrenExchRateRequestMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Commondata.CommonDataSvcClient.prototype.getCurrenciesExchangeRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetCurrenciesExchangeRate',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetCurrenciesExchangeRate,
      callback);
};


/**
 * @param {!proto.Commondata.CurrenExchRateRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Commondata.CurrenExchRateRequestMessage>}
 *     Promise that resolves to the response
 */
proto.Commondata.CommonDataSvcPromiseClient.prototype.getCurrenciesExchangeRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetCurrenciesExchangeRate',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetCurrenciesExchangeRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Commondata.DeleteAccountMessage,
 *   !proto.Commondata.SuccessCommonMessage>}
 */
const methodDescriptor_CommonDataSvc_DeleteCustomerPaymentAndBeneficiaryAccount = new grpc.web.MethodDescriptor(
  '/Commondata.CommonDataSvc/DeleteCustomerPaymentAndBeneficiaryAccount',
  grpc.web.MethodType.UNARY,
  proto.Commondata.DeleteAccountMessage,
  proto.Commondata.SuccessCommonMessage,
  /**
   * @param {!proto.Commondata.DeleteAccountMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Commondata.SuccessCommonMessage.deserializeBinary
);


/**
 * @param {!proto.Commondata.DeleteAccountMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Commondata.SuccessCommonMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Commondata.SuccessCommonMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Commondata.CommonDataSvcClient.prototype.deleteCustomerPaymentAndBeneficiaryAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Commondata.CommonDataSvc/DeleteCustomerPaymentAndBeneficiaryAccount',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_DeleteCustomerPaymentAndBeneficiaryAccount,
      callback);
};


/**
 * @param {!proto.Commondata.DeleteAccountMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Commondata.SuccessCommonMessage>}
 *     Promise that resolves to the response
 */
proto.Commondata.CommonDataSvcPromiseClient.prototype.deleteCustomerPaymentAndBeneficiaryAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Commondata.CommonDataSvc/DeleteCustomerPaymentAndBeneficiaryAccount',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_DeleteCustomerPaymentAndBeneficiaryAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Commondata.LanguageRequestMessage,
 *   !proto.Commondata.SuccessCommonMessage>}
 */
const methodDescriptor_CommonDataSvc_GenerateTransOTPNow = new grpc.web.MethodDescriptor(
  '/Commondata.CommonDataSvc/GenerateTransOTPNow',
  grpc.web.MethodType.UNARY,
  proto.Commondata.LanguageRequestMessage,
  proto.Commondata.SuccessCommonMessage,
  /**
   * @param {!proto.Commondata.LanguageRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Commondata.SuccessCommonMessage.deserializeBinary
);


/**
 * @param {!proto.Commondata.LanguageRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Commondata.SuccessCommonMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Commondata.SuccessCommonMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Commondata.CommonDataSvcClient.prototype.generateTransOTPNow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GenerateTransOTPNow',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GenerateTransOTPNow,
      callback);
};


/**
 * @param {!proto.Commondata.LanguageRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Commondata.SuccessCommonMessage>}
 *     Promise that resolves to the response
 */
proto.Commondata.CommonDataSvcPromiseClient.prototype.generateTransOTPNow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GenerateTransOTPNow',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GenerateTransOTPNow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Commondata.OTPTransRequestMessage,
 *   !proto.Commondata.SuccessCommonMessage>}
 */
const methodDescriptor_CommonDataSvc_CreateOTPForAddingSourceAccountNo = new grpc.web.MethodDescriptor(
  '/Commondata.CommonDataSvc/CreateOTPForAddingSourceAccountNo',
  grpc.web.MethodType.UNARY,
  proto.Commondata.OTPTransRequestMessage,
  proto.Commondata.SuccessCommonMessage,
  /**
   * @param {!proto.Commondata.OTPTransRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Commondata.SuccessCommonMessage.deserializeBinary
);


/**
 * @param {!proto.Commondata.OTPTransRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Commondata.SuccessCommonMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Commondata.SuccessCommonMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Commondata.CommonDataSvcClient.prototype.createOTPForAddingSourceAccountNo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Commondata.CommonDataSvc/CreateOTPForAddingSourceAccountNo',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_CreateOTPForAddingSourceAccountNo,
      callback);
};


/**
 * @param {!proto.Commondata.OTPTransRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Commondata.SuccessCommonMessage>}
 *     Promise that resolves to the response
 */
proto.Commondata.CommonDataSvcPromiseClient.prototype.createOTPForAddingSourceAccountNo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Commondata.CommonDataSvc/CreateOTPForAddingSourceAccountNo',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_CreateOTPForAddingSourceAccountNo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Commondata.CustProfilePicInfo,
 *   !proto.Commondata.CustomerProfileInfoResponseMessage>}
 */
const methodDescriptor_CommonDataSvc_SaveProfilePicture = new grpc.web.MethodDescriptor(
  '/Commondata.CommonDataSvc/SaveProfilePicture',
  grpc.web.MethodType.UNARY,
  proto.Commondata.CustProfilePicInfo,
  proto.Commondata.CustomerProfileInfoResponseMessage,
  /**
   * @param {!proto.Commondata.CustProfilePicInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Commondata.CustomerProfileInfoResponseMessage.deserializeBinary
);


/**
 * @param {!proto.Commondata.CustProfilePicInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Commondata.CustomerProfileInfoResponseMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Commondata.CustomerProfileInfoResponseMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Commondata.CommonDataSvcClient.prototype.saveProfilePicture =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Commondata.CommonDataSvc/SaveProfilePicture',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_SaveProfilePicture,
      callback);
};


/**
 * @param {!proto.Commondata.CustProfilePicInfo} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Commondata.CustomerProfileInfoResponseMessage>}
 *     Promise that resolves to the response
 */
proto.Commondata.CommonDataSvcPromiseClient.prototype.saveProfilePicture =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Commondata.CommonDataSvc/SaveProfilePicture',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_SaveProfilePicture);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Commondata.CountryRequestMessage,
 *   !proto.Commondata.TransLimitResponseMessage>}
 */
const methodDescriptor_CommonDataSvc_GetTransLimitPerCountry = new grpc.web.MethodDescriptor(
  '/Commondata.CommonDataSvc/GetTransLimitPerCountry',
  grpc.web.MethodType.UNARY,
  proto.Commondata.CountryRequestMessage,
  proto.Commondata.TransLimitResponseMessage,
  /**
   * @param {!proto.Commondata.CountryRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Commondata.TransLimitResponseMessage.deserializeBinary
);


/**
 * @param {!proto.Commondata.CountryRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Commondata.TransLimitResponseMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Commondata.TransLimitResponseMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Commondata.CommonDataSvcClient.prototype.getTransLimitPerCountry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetTransLimitPerCountry',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetTransLimitPerCountry,
      callback);
};


/**
 * @param {!proto.Commondata.CountryRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Commondata.TransLimitResponseMessage>}
 *     Promise that resolves to the response
 */
proto.Commondata.CommonDataSvcPromiseClient.prototype.getTransLimitPerCountry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetTransLimitPerCountry',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetTransLimitPerCountry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Commondata.LanguageRequestMessage,
 *   !proto.Commondata.IdCardDataMessage>}
 */
const methodDescriptor_CommonDataSvc_GetCustomerIdCardData = new grpc.web.MethodDescriptor(
  '/Commondata.CommonDataSvc/GetCustomerIdCardData',
  grpc.web.MethodType.UNARY,
  proto.Commondata.LanguageRequestMessage,
  proto.Commondata.IdCardDataMessage,
  /**
   * @param {!proto.Commondata.LanguageRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Commondata.IdCardDataMessage.deserializeBinary
);


/**
 * @param {!proto.Commondata.LanguageRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Commondata.IdCardDataMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Commondata.IdCardDataMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Commondata.CommonDataSvcClient.prototype.getCustomerIdCardData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetCustomerIdCardData',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetCustomerIdCardData,
      callback);
};


/**
 * @param {!proto.Commondata.LanguageRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Commondata.IdCardDataMessage>}
 *     Promise that resolves to the response
 */
proto.Commondata.CommonDataSvcPromiseClient.prototype.getCustomerIdCardData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Commondata.CommonDataSvc/GetCustomerIdCardData',
      request,
      metadata || {},
      methodDescriptor_CommonDataSvc_GetCustomerIdCardData);
};


module.exports = proto.Commondata;

