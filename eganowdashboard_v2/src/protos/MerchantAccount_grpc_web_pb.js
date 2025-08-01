/**
 * @fileoverview gRPC-Web generated client stub for MerchantAccount
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.23.3
// source: MerchantAccount.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.MerchantAccount = require('./MerchantAccount_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.MerchantAccount.MerchantAccountSvcClient =
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
proto.MerchantAccount.MerchantAccountSvcPromiseClient =
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
 *   !proto.MerchantAccount.PayPartnerMerchantWithServiceAndPackageRequestMessage,
 *   !proto.MerchantAccount.SuccessMessagePayPartnerMerchant>}
 */
const methodDescriptor_MerchantAccountSvc_CreateMerchantApplicationWithOneServiceAndPackages = new grpc.web.MethodDescriptor(
  '/MerchantAccount.MerchantAccountSvc/CreateMerchantApplicationWithOneServiceAndPackages',
  grpc.web.MethodType.UNARY,
  proto.MerchantAccount.PayPartnerMerchantWithServiceAndPackageRequestMessage,
  proto.MerchantAccount.SuccessMessagePayPartnerMerchant,
  /**
   * @param {!proto.MerchantAccount.PayPartnerMerchantWithServiceAndPackageRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MerchantAccount.SuccessMessagePayPartnerMerchant.deserializeBinary
);


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantWithServiceAndPackageRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.MerchantAccount.SuccessMessagePayPartnerMerchant)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MerchantAccount.SuccessMessagePayPartnerMerchant>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MerchantAccount.MerchantAccountSvcClient.prototype.createMerchantApplicationWithOneServiceAndPackages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/CreateMerchantApplicationWithOneServiceAndPackages',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_CreateMerchantApplicationWithOneServiceAndPackages,
      callback);
};


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantWithServiceAndPackageRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MerchantAccount.SuccessMessagePayPartnerMerchant>}
 *     Promise that resolves to the response
 */
proto.MerchantAccount.MerchantAccountSvcPromiseClient.prototype.createMerchantApplicationWithOneServiceAndPackages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/CreateMerchantApplicationWithOneServiceAndPackages',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_CreateMerchantApplicationWithOneServiceAndPackages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.MerchantAccount.MerchantServiceWithPackagesRequestMessage,
 *   !proto.MerchantAccount.SuccessMessagePayPartnerMerchant>}
 */
const methodDescriptor_MerchantAccountSvc_CreateMerchantServiceAndPackages = new grpc.web.MethodDescriptor(
  '/MerchantAccount.MerchantAccountSvc/CreateMerchantServiceAndPackages',
  grpc.web.MethodType.UNARY,
  proto.MerchantAccount.MerchantServiceWithPackagesRequestMessage,
  proto.MerchantAccount.SuccessMessagePayPartnerMerchant,
  /**
   * @param {!proto.MerchantAccount.MerchantServiceWithPackagesRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MerchantAccount.SuccessMessagePayPartnerMerchant.deserializeBinary
);


/**
 * @param {!proto.MerchantAccount.MerchantServiceWithPackagesRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.MerchantAccount.SuccessMessagePayPartnerMerchant)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MerchantAccount.SuccessMessagePayPartnerMerchant>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MerchantAccount.MerchantAccountSvcClient.prototype.createMerchantServiceAndPackages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/CreateMerchantServiceAndPackages',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_CreateMerchantServiceAndPackages,
      callback);
};


/**
 * @param {!proto.MerchantAccount.MerchantServiceWithPackagesRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MerchantAccount.SuccessMessagePayPartnerMerchant>}
 *     Promise that resolves to the response
 */
proto.MerchantAccount.MerchantAccountSvcPromiseClient.prototype.createMerchantServiceAndPackages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/CreateMerchantServiceAndPackages',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_CreateMerchantServiceAndPackages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.MerchantAccount.PayPartnerMerchantEmptyMessage,
 *   !proto.MerchantAccount.EganowModuleListRequestMessage>}
 */
const methodDescriptor_MerchantAccountSvc_GetEganowModulesForMerchantsAll = new grpc.web.MethodDescriptor(
  '/MerchantAccount.MerchantAccountSvc/GetEganowModulesForMerchantsAll',
  grpc.web.MethodType.UNARY,
  proto.MerchantAccount.PayPartnerMerchantEmptyMessage,
  proto.MerchantAccount.EganowModuleListRequestMessage,
  /**
   * @param {!proto.MerchantAccount.PayPartnerMerchantEmptyMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MerchantAccount.EganowModuleListRequestMessage.deserializeBinary
);


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantEmptyMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.MerchantAccount.EganowModuleListRequestMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MerchantAccount.EganowModuleListRequestMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MerchantAccount.MerchantAccountSvcClient.prototype.getEganowModulesForMerchantsAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetEganowModulesForMerchantsAll',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetEganowModulesForMerchantsAll,
      callback);
};


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantEmptyMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MerchantAccount.EganowModuleListRequestMessage>}
 *     Promise that resolves to the response
 */
proto.MerchantAccount.MerchantAccountSvcPromiseClient.prototype.getEganowModulesForMerchantsAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetEganowModulesForMerchantsAll',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetEganowModulesForMerchantsAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.MerchantAccount.EganowModuleRequestMessage,
 *   !proto.MerchantAccount.MerchantServiceCategoryListResponseMessage>}
 */
const methodDescriptor_MerchantAccountSvc_GetMerchantServiceCategoryPerModule = new grpc.web.MethodDescriptor(
  '/MerchantAccount.MerchantAccountSvc/GetMerchantServiceCategoryPerModule',
  grpc.web.MethodType.UNARY,
  proto.MerchantAccount.EganowModuleRequestMessage,
  proto.MerchantAccount.MerchantServiceCategoryListResponseMessage,
  /**
   * @param {!proto.MerchantAccount.EganowModuleRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MerchantAccount.MerchantServiceCategoryListResponseMessage.deserializeBinary
);


/**
 * @param {!proto.MerchantAccount.EganowModuleRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.MerchantAccount.MerchantServiceCategoryListResponseMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MerchantAccount.MerchantServiceCategoryListResponseMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MerchantAccount.MerchantAccountSvcClient.prototype.getMerchantServiceCategoryPerModule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetMerchantServiceCategoryPerModule',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetMerchantServiceCategoryPerModule,
      callback);
};


/**
 * @param {!proto.MerchantAccount.EganowModuleRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MerchantAccount.MerchantServiceCategoryListResponseMessage>}
 *     Promise that resolves to the response
 */
proto.MerchantAccount.MerchantAccountSvcPromiseClient.prototype.getMerchantServiceCategoryPerModule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetMerchantServiceCategoryPerModule',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetMerchantServiceCategoryPerModule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.MerchantAccount.PayPartnerServiceRequestMessage,
 *   !proto.MerchantAccount.PayPartnerServicesListResponseMessage>}
 */
const methodDescriptor_MerchantAccountSvc_GetPayPartnerServicesListByMerchantId = new grpc.web.MethodDescriptor(
  '/MerchantAccount.MerchantAccountSvc/GetPayPartnerServicesListByMerchantId',
  grpc.web.MethodType.UNARY,
  proto.MerchantAccount.PayPartnerServiceRequestMessage,
  proto.MerchantAccount.PayPartnerServicesListResponseMessage,
  /**
   * @param {!proto.MerchantAccount.PayPartnerServiceRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MerchantAccount.PayPartnerServicesListResponseMessage.deserializeBinary
);


/**
 * @param {!proto.MerchantAccount.PayPartnerServiceRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.MerchantAccount.PayPartnerServicesListResponseMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MerchantAccount.PayPartnerServicesListResponseMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MerchantAccount.MerchantAccountSvcClient.prototype.getPayPartnerServicesListByMerchantId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetPayPartnerServicesListByMerchantId',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetPayPartnerServicesListByMerchantId,
      callback);
};


/**
 * @param {!proto.MerchantAccount.PayPartnerServiceRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MerchantAccount.PayPartnerServicesListResponseMessage>}
 *     Promise that resolves to the response
 */
proto.MerchantAccount.MerchantAccountSvcPromiseClient.prototype.getPayPartnerServicesListByMerchantId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetPayPartnerServicesListByMerchantId',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetPayPartnerServicesListByMerchantId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.MerchantAccount.PayPartnerMerchantEmptyMessage,
 *   !proto.MerchantAccount.PayPartnerServicesListResponseMessage>}
 */
const methodDescriptor_MerchantAccountSvc_GetPayPartnerServicesListByJwt = new grpc.web.MethodDescriptor(
  '/MerchantAccount.MerchantAccountSvc/GetPayPartnerServicesListByJwt',
  grpc.web.MethodType.UNARY,
  proto.MerchantAccount.PayPartnerMerchantEmptyMessage,
  proto.MerchantAccount.PayPartnerServicesListResponseMessage,
  /**
   * @param {!proto.MerchantAccount.PayPartnerMerchantEmptyMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MerchantAccount.PayPartnerServicesListResponseMessage.deserializeBinary
);


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantEmptyMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.MerchantAccount.PayPartnerServicesListResponseMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MerchantAccount.PayPartnerServicesListResponseMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MerchantAccount.MerchantAccountSvcClient.prototype.getPayPartnerServicesListByJwt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetPayPartnerServicesListByJwt',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetPayPartnerServicesListByJwt,
      callback);
};


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantEmptyMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MerchantAccount.PayPartnerServicesListResponseMessage>}
 *     Promise that resolves to the response
 */
proto.MerchantAccount.MerchantAccountSvcPromiseClient.prototype.getPayPartnerServicesListByJwt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetPayPartnerServicesListByJwt',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetPayPartnerServicesListByJwt);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.MerchantAccount.PayPartnerMerchantCountryMessage,
 *   !proto.MerchantAccount.PayPartnerMerchantModelMessage>}
 */
const methodDescriptor_MerchantAccountSvc_GetPayPartnerInfoByJwt = new grpc.web.MethodDescriptor(
  '/MerchantAccount.MerchantAccountSvc/GetPayPartnerInfoByJwt',
  grpc.web.MethodType.UNARY,
  proto.MerchantAccount.PayPartnerMerchantCountryMessage,
  proto.MerchantAccount.PayPartnerMerchantModelMessage,
  /**
   * @param {!proto.MerchantAccount.PayPartnerMerchantCountryMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MerchantAccount.PayPartnerMerchantModelMessage.deserializeBinary
);


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantCountryMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.MerchantAccount.PayPartnerMerchantModelMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MerchantAccount.PayPartnerMerchantModelMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MerchantAccount.MerchantAccountSvcClient.prototype.getPayPartnerInfoByJwt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetPayPartnerInfoByJwt',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetPayPartnerInfoByJwt,
      callback);
};


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantCountryMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MerchantAccount.PayPartnerMerchantModelMessage>}
 *     Promise that resolves to the response
 */
proto.MerchantAccount.MerchantAccountSvcPromiseClient.prototype.getPayPartnerInfoByJwt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetPayPartnerInfoByJwt',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetPayPartnerInfoByJwt);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.MerchantAccount.PayPartnerMerchantModelForUpdateMessage,
 *   !proto.MerchantAccount.SuccessMessagePayPartnerMerchant>}
 */
const methodDescriptor_MerchantAccountSvc_UpdatePayPartnerMerchant = new grpc.web.MethodDescriptor(
  '/MerchantAccount.MerchantAccountSvc/UpdatePayPartnerMerchant',
  grpc.web.MethodType.UNARY,
  proto.MerchantAccount.PayPartnerMerchantModelForUpdateMessage,
  proto.MerchantAccount.SuccessMessagePayPartnerMerchant,
  /**
   * @param {!proto.MerchantAccount.PayPartnerMerchantModelForUpdateMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MerchantAccount.SuccessMessagePayPartnerMerchant.deserializeBinary
);


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantModelForUpdateMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.MerchantAccount.SuccessMessagePayPartnerMerchant)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MerchantAccount.SuccessMessagePayPartnerMerchant>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MerchantAccount.MerchantAccountSvcClient.prototype.updatePayPartnerMerchant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/UpdatePayPartnerMerchant',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_UpdatePayPartnerMerchant,
      callback);
};


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantModelForUpdateMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MerchantAccount.SuccessMessagePayPartnerMerchant>}
 *     Promise that resolves to the response
 */
proto.MerchantAccount.MerchantAccountSvcPromiseClient.prototype.updatePayPartnerMerchant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/UpdatePayPartnerMerchant',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_UpdatePayPartnerMerchant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.MerchantAccount.PayPartnerMerchantCountryMessage,
 *   !proto.MerchantAccount.RegulatorsListRequestMessage>}
 */
const methodDescriptor_MerchantAccountSvc_GetPayRegulators = new grpc.web.MethodDescriptor(
  '/MerchantAccount.MerchantAccountSvc/GetPayRegulators',
  grpc.web.MethodType.UNARY,
  proto.MerchantAccount.PayPartnerMerchantCountryMessage,
  proto.MerchantAccount.RegulatorsListRequestMessage,
  /**
   * @param {!proto.MerchantAccount.PayPartnerMerchantCountryMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MerchantAccount.RegulatorsListRequestMessage.deserializeBinary
);


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantCountryMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.MerchantAccount.RegulatorsListRequestMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MerchantAccount.RegulatorsListRequestMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MerchantAccount.MerchantAccountSvcClient.prototype.getPayRegulators =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetPayRegulators',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetPayRegulators,
      callback);
};


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantCountryMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MerchantAccount.RegulatorsListRequestMessage>}
 *     Promise that resolves to the response
 */
proto.MerchantAccount.MerchantAccountSvcPromiseClient.prototype.getPayRegulators =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetPayRegulators',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetPayRegulators);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.MerchantAccount.PayPartnerMerchantCountryMessage,
 *   !proto.MerchantAccount.SuccessMessagePayPartnerMerchant>}
 */
const methodDescriptor_MerchantAccountSvc_CheckIfMerchantAccountExist = new grpc.web.MethodDescriptor(
  '/MerchantAccount.MerchantAccountSvc/CheckIfMerchantAccountExist',
  grpc.web.MethodType.UNARY,
  proto.MerchantAccount.PayPartnerMerchantCountryMessage,
  proto.MerchantAccount.SuccessMessagePayPartnerMerchant,
  /**
   * @param {!proto.MerchantAccount.PayPartnerMerchantCountryMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MerchantAccount.SuccessMessagePayPartnerMerchant.deserializeBinary
);


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantCountryMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.MerchantAccount.SuccessMessagePayPartnerMerchant)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MerchantAccount.SuccessMessagePayPartnerMerchant>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MerchantAccount.MerchantAccountSvcClient.prototype.checkIfMerchantAccountExist =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/CheckIfMerchantAccountExist',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_CheckIfMerchantAccountExist,
      callback);
};


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantCountryMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MerchantAccount.SuccessMessagePayPartnerMerchant>}
 *     Promise that resolves to the response
 */
proto.MerchantAccount.MerchantAccountSvcPromiseClient.prototype.checkIfMerchantAccountExist =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/CheckIfMerchantAccountExist',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_CheckIfMerchantAccountExist);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.MerchantAccount.PayPartnerMerchantCountryMessage,
 *   !proto.MerchantAccount.MerchantServicesListMessage>}
 */
const methodDescriptor_MerchantAccountSvc_GetMerchantServices = new grpc.web.MethodDescriptor(
  '/MerchantAccount.MerchantAccountSvc/GetMerchantServices',
  grpc.web.MethodType.UNARY,
  proto.MerchantAccount.PayPartnerMerchantCountryMessage,
  proto.MerchantAccount.MerchantServicesListMessage,
  /**
   * @param {!proto.MerchantAccount.PayPartnerMerchantCountryMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MerchantAccount.MerchantServicesListMessage.deserializeBinary
);


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantCountryMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.MerchantAccount.MerchantServicesListMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MerchantAccount.MerchantServicesListMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MerchantAccount.MerchantAccountSvcClient.prototype.getMerchantServices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetMerchantServices',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetMerchantServices,
      callback);
};


/**
 * @param {!proto.MerchantAccount.PayPartnerMerchantCountryMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MerchantAccount.MerchantServicesListMessage>}
 *     Promise that resolves to the response
 */
proto.MerchantAccount.MerchantAccountSvcPromiseClient.prototype.getMerchantServices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MerchantAccount.MerchantAccountSvc/GetMerchantServices',
      request,
      metadata || {},
      methodDescriptor_MerchantAccountSvc_GetMerchantServices);
};


module.exports = proto.MerchantAccount;

