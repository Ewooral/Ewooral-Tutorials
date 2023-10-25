/**
 * @fileoverview gRPC-Web generated client stub for ExternalMerchant
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ExternalMerchant = require('./ExternalMerchant_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ExternalMerchant.ExternalMerchantSvcClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ExternalMerchant.ExternalMerchantSvcPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ExternalMerchant.ExtMerchantTransRequestMessage,
 *   !proto.ExternalMerchant.SuccessExternalMerchantMessage>}
 */
const methodDescriptor_ExternalMerchantSvc_PostCollectionExternalMerchantTransaction = new grpc.web.MethodDescriptor(
  '/ExternalMerchant.ExternalMerchantSvc/PostCollectionExternalMerchantTransaction',
  grpc.web.MethodType.UNARY,
  proto.ExternalMerchant.ExtMerchantTransRequestMessage,
  proto.ExternalMerchant.SuccessExternalMerchantMessage,
  /**
   * @param {!proto.ExternalMerchant.ExtMerchantTransRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ExternalMerchant.SuccessExternalMerchantMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ExternalMerchant.ExtMerchantTransRequestMessage,
 *   !proto.ExternalMerchant.SuccessExternalMerchantMessage>}
 */
const methodInfo_ExternalMerchantSvc_PostCollectionExternalMerchantTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ExternalMerchant.SuccessExternalMerchantMessage,
  /**
   * @param {!proto.ExternalMerchant.ExtMerchantTransRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ExternalMerchant.SuccessExternalMerchantMessage.deserializeBinary
);


/**
 * @param {!proto.ExternalMerchant.ExtMerchantTransRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ExternalMerchant.SuccessExternalMerchantMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ExternalMerchant.SuccessExternalMerchantMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ExternalMerchant.ExternalMerchantSvcClient.prototype.postCollectionExternalMerchantTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ExternalMerchant.ExternalMerchantSvc/PostCollectionExternalMerchantTransaction',
      request,
      metadata || {},
      methodDescriptor_ExternalMerchantSvc_PostCollectionExternalMerchantTransaction,
      callback);
};


/**
 * @param {!proto.ExternalMerchant.ExtMerchantTransRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ExternalMerchant.SuccessExternalMerchantMessage>}
 *     Promise that resolves to the response
 */
proto.ExternalMerchant.ExternalMerchantSvcPromiseClient.prototype.postCollectionExternalMerchantTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ExternalMerchant.ExternalMerchantSvc/PostCollectionExternalMerchantTransaction',
      request,
      metadata || {},
      methodDescriptor_ExternalMerchantSvc_PostCollectionExternalMerchantTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ExternalMerchant.ExtMerchantTransRequestMessage,
 *   !proto.ExternalMerchant.SuccessExternalMerchantMessage>}
 */
const methodDescriptor_ExternalMerchantSvc_PostPayoutExternalMerchantTransaction = new grpc.web.MethodDescriptor(
  '/ExternalMerchant.ExternalMerchantSvc/PostPayoutExternalMerchantTransaction',
  grpc.web.MethodType.UNARY,
  proto.ExternalMerchant.ExtMerchantTransRequestMessage,
  proto.ExternalMerchant.SuccessExternalMerchantMessage,
  /**
   * @param {!proto.ExternalMerchant.ExtMerchantTransRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ExternalMerchant.SuccessExternalMerchantMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ExternalMerchant.ExtMerchantTransRequestMessage,
 *   !proto.ExternalMerchant.SuccessExternalMerchantMessage>}
 */
const methodInfo_ExternalMerchantSvc_PostPayoutExternalMerchantTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ExternalMerchant.SuccessExternalMerchantMessage,
  /**
   * @param {!proto.ExternalMerchant.ExtMerchantTransRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ExternalMerchant.SuccessExternalMerchantMessage.deserializeBinary
);


/**
 * @param {!proto.ExternalMerchant.ExtMerchantTransRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ExternalMerchant.SuccessExternalMerchantMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ExternalMerchant.SuccessExternalMerchantMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ExternalMerchant.ExternalMerchantSvcClient.prototype.postPayoutExternalMerchantTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ExternalMerchant.ExternalMerchantSvc/PostPayoutExternalMerchantTransaction',
      request,
      metadata || {},
      methodDescriptor_ExternalMerchantSvc_PostPayoutExternalMerchantTransaction,
      callback);
};


/**
 * @param {!proto.ExternalMerchant.ExtMerchantTransRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ExternalMerchant.SuccessExternalMerchantMessage>}
 *     Promise that resolves to the response
 */
proto.ExternalMerchant.ExternalMerchantSvcPromiseClient.prototype.postPayoutExternalMerchantTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ExternalMerchant.ExternalMerchantSvc/PostPayoutExternalMerchantTransaction',
      request,
      metadata || {},
      methodDescriptor_ExternalMerchantSvc_PostPayoutExternalMerchantTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ExternalMerchant.ValidateExtMerchantApiKeyRequestMessage,
 *   !proto.ExternalMerchant.SuccessExternalMerchantMessage>}
 */
const methodDescriptor_ExternalMerchantSvc_ValidateExternalMerchantApiKey = new grpc.web.MethodDescriptor(
  '/ExternalMerchant.ExternalMerchantSvc/ValidateExternalMerchantApiKey',
  grpc.web.MethodType.UNARY,
  proto.ExternalMerchant.ValidateExtMerchantApiKeyRequestMessage,
  proto.ExternalMerchant.SuccessExternalMerchantMessage,
  /**
   * @param {!proto.ExternalMerchant.ValidateExtMerchantApiKeyRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ExternalMerchant.SuccessExternalMerchantMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ExternalMerchant.ValidateExtMerchantApiKeyRequestMessage,
 *   !proto.ExternalMerchant.SuccessExternalMerchantMessage>}
 */
const methodInfo_ExternalMerchantSvc_ValidateExternalMerchantApiKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ExternalMerchant.SuccessExternalMerchantMessage,
  /**
   * @param {!proto.ExternalMerchant.ValidateExtMerchantApiKeyRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ExternalMerchant.SuccessExternalMerchantMessage.deserializeBinary
);


/**
 * @param {!proto.ExternalMerchant.ValidateExtMerchantApiKeyRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ExternalMerchant.SuccessExternalMerchantMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ExternalMerchant.SuccessExternalMerchantMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ExternalMerchant.ExternalMerchantSvcClient.prototype.validateExternalMerchantApiKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ExternalMerchant.ExternalMerchantSvc/ValidateExternalMerchantApiKey',
      request,
      metadata || {},
      methodDescriptor_ExternalMerchantSvc_ValidateExternalMerchantApiKey,
      callback);
};


/**
 * @param {!proto.ExternalMerchant.ValidateExtMerchantApiKeyRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ExternalMerchant.SuccessExternalMerchantMessage>}
 *     Promise that resolves to the response
 */
proto.ExternalMerchant.ExternalMerchantSvcPromiseClient.prototype.validateExternalMerchantApiKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ExternalMerchant.ExternalMerchantSvc/ValidateExternalMerchantApiKey',
      request,
      metadata || {},
      methodDescriptor_ExternalMerchantSvc_ValidateExternalMerchantApiKey);
};


module.exports = proto.ExternalMerchant;

