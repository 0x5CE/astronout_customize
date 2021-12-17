export var idlFactory = function idlFactory(_ref) {
  var IDL = _ref.IDL;

  var ClearArguments = IDL.Record({});
  var BatchId = IDL.Nat;
  var Key = IDL.Text;
  var CreateAssetArguments = IDL.Record({
    'key': Key,
    'content_type': IDL.Text
  });
  var UnsetAssetContentArguments = IDL.Record({
    'key': Key,
    'content_encoding': IDL.Text
  });
  var DeleteAssetArguments = IDL.Record({ 'key': Key });
  var ChunkId = IDL.Nat;
  var SetAssetContentArguments = IDL.Record({
    'key': Key,
    'sha256': IDL.Opt(IDL.Vec(IDL.Nat8)),
    'chunk_ids': IDL.Vec(ChunkId),
    'content_encoding': IDL.Text
  });
  var BatchOperationKind = IDL.Variant({
    'CreateAsset': CreateAssetArguments,
    'UnsetAssetContent': UnsetAssetContentArguments,
    'DeleteAsset': DeleteAssetArguments,
    'SetAssetContent': SetAssetContentArguments,
    'Clear': ClearArguments
  });
  var HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  var HttpRequest = IDL.Record({
    'url': IDL.Text,
    'method': IDL.Text,
    'body': IDL.Vec(IDL.Nat8),
    'headers': IDL.Vec(HeaderField)
  });
  var StreamingCallbackToken = IDL.Record({
    'key': Key,
    'sha256': IDL.Opt(IDL.Vec(IDL.Nat8)),
    'index': IDL.Nat,
    'content_encoding': IDL.Text
  });
  var StreamingCallbackHttpResponse = IDL.Record({
    'token': IDL.Opt(StreamingCallbackToken),
    'body': IDL.Vec(IDL.Nat8)
  });
  var StreamingStrategy = IDL.Variant({
    'Callback': IDL.Record({
      'token': StreamingCallbackToken,
      'callback': IDL.Func([StreamingCallbackToken], [IDL.Opt(StreamingCallbackHttpResponse)], ['query'])
    })
  });
  var HttpResponse = IDL.Record({
    'body': IDL.Vec(IDL.Nat8),
    'headers': IDL.Vec(HeaderField),
    'streaming_strategy': IDL.Opt(StreamingStrategy),
    'status_code': IDL.Nat16
  });
  var Time = IDL.Int;
  return IDL.Service({
    'authorize': IDL.Func([IDL.Principal], [], []),
    'clear': IDL.Func([ClearArguments], [], []),
    'commit_batch': IDL.Func([IDL.Record({
      'batch_id': BatchId,
      'operations': IDL.Vec(BatchOperationKind)
    })], [], []),
    'create_asset': IDL.Func([CreateAssetArguments], [], []),
    'create_batch': IDL.Func([IDL.Record({})], [IDL.Record({ 'batch_id': BatchId })], []),
    'create_chunk': IDL.Func([IDL.Record({ 'content': IDL.Vec(IDL.Nat8), 'batch_id': BatchId })], [IDL.Record({ 'chunk_id': ChunkId })], []),
    'delete_asset': IDL.Func([DeleteAssetArguments], [], []),
    'get': IDL.Func([IDL.Record({ 'key': Key, 'accept_encodings': IDL.Vec(IDL.Text) })], [IDL.Record({
      'content': IDL.Vec(IDL.Nat8),
      'sha256': IDL.Opt(IDL.Vec(IDL.Nat8)),
      'content_type': IDL.Text,
      'content_encoding': IDL.Text,
      'total_length': IDL.Nat
    })], ['query']),
    'get_chunk': IDL.Func([IDL.Record({
      'key': Key,
      'sha256': IDL.Opt(IDL.Vec(IDL.Nat8)),
      'index': IDL.Nat,
      'content_encoding': IDL.Text
    })], [IDL.Record({ 'content': IDL.Vec(IDL.Nat8) })], ['query']),
    'http_request': IDL.Func([HttpRequest], [HttpResponse], ['query']),
    'http_request_streaming_callback': IDL.Func([StreamingCallbackToken], [IDL.Opt(StreamingCallbackHttpResponse)], ['query']),
    'list': IDL.Func([IDL.Record({})], [IDL.Vec(IDL.Record({
      'key': Key,
      'encodings': IDL.Vec(IDL.Record({
        'modified': Time,
        'sha256': IDL.Opt(IDL.Vec(IDL.Nat8)),
        'length': IDL.Nat,
        'content_encoding': IDL.Text
      })),
      'content_type': IDL.Text
    }))], ['query']),
    'set_asset_content': IDL.Func([SetAssetContentArguments], [], []),
    'store': IDL.Func([IDL.Record({
      'key': Key,
      'content': IDL.Vec(IDL.Nat8),
      'sha256': IDL.Opt(IDL.Vec(IDL.Nat8)),
      'content_type': IDL.Text,
      'content_encoding': IDL.Text
    })], [], []),
    'unset_asset_content': IDL.Func([UnsetAssetContentArguments], [], [])
  });
};
export var init = function init(_ref2) {
  var IDL = _ref2.IDL;
  return [];
};