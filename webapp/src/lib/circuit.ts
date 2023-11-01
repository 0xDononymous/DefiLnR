//This file is generated by the AxiomREPL. DO NOT DIRECTLY EDIT THIS FILE!
//To make changes, go to https://repl.axiom.xyz/ and export a new circuit.
//
//                 _                 _____  ______ _____  _
//     /\         (_)               |  __ \|  ____|  __ \| |
//    /  \   __  ___  ___  _ __ ___ | |__) | |__  | |__) | |
//   / /\ \  \ \/ / |/ _ \| '_ ` _ \|  _  /|  __| |  ___/| |
//  / ____ \  >  <| | (_) | | | | | | | \ \| |____| |    | |____
// /_/    \_\/_/\_\_|\___/|_| |_| |_|_|  \_\______|_|    |______|
//
//

import {
  Halo2Lib,
  AxiomData,
  CircuitValue
} from "@axiom-crypto/experimental/halo2-js";
const defaultInputs = {
  blockNumber: 9610835,
  txIdx: 6,
  logIdx: 3
};
type CircuitInputType = typeof defaultInputs;
export interface CircuitInputs extends CircuitInputType {}
export interface CircuitValueInputs {
  blockNumber: CircuitValue;
  txIdx: CircuitValue;
  logIdx: CircuitValue;
}
const circuitFn = async (
  halo2Lib: Halo2Lib,
  axiomData: AxiomData,
  { blockNumber, txIdx, logIdx }: CircuitValueInputs
) => {
  const { add, and, or, log } = halo2Lib;
  const { getReceipt, getTx, addToCallback } = axiomData;
  const eventSchema =
    "0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67";

  // specify and fetch the data you want Axiom to verify
  let receipt = getReceipt(blockNumber, txIdx);
  let receiptLog = receipt.log(logIdx); //get the log at index 3

  // get the topic at index 0 (event schema)
  let swapSchema = receiptLog.topic(0, eventSchema);

  // get the topic at index 2
  let swapTo = receiptLog.topic(2, eventSchema).toCircuitValue();

  // get the block number for receipt
  let blockNum = receipt.blockNumber().toCircuitValue();

  // get the `to` field of the transaction
  let tx = getTx(blockNumber, txIdx);
  let txTo = tx.to().toCircuitValue();

  addToCallback(swapSchema);
  addToCallback(swapTo);
  addToCallback(blockNum);
  addToCallback(txTo);
};
const config = {
  k: 13,
  numAdvice: 4,
  numLookupAdvice: 1,
  numInstance: 1,
  numLookupBits: 12,
  numVirtualInstance: 2
};
const vk = [
  2,
  13,
  0,
  0,
  0,
  0,
  6,
  0,
  0,
  0,
  22,
  53,
  175,
  191,
  189,
  44,
  47,
  125,
  102,
  223,
  68,
  183,
  53,
  24,
  221,
  245,
  11,
  40,
  210,
  84,
  147,
  34,
  241,
  111,
  251,
  44,
  176,
  97,
  40,
  23,
  111,
  5,
  236,
  172,
  54,
  30,
  205,
  68,
  139,
  37,
  34,
  255,
  110,
  222,
  63,
  213,
  167,
  105,
  46,
  125,
  148,
  2,
  105,
  228,
  6,
  175,
  114,
  9,
  31,
  238,
  182,
  133,
  168,
  45,
  28,
  159,
  208,
  89,
  2,
  25,
  123,
  44,
  175,
  207,
  178,
  3,
  221,
  30,
  25,
  215,
  156,
  251,
  160,
  211,
  110,
  185,
  184,
  40,
  149,
  62,
  212,
  252,
  3,
  33,
  213,
  13,
  168,
  207,
  31,
  79,
  122,
  8,
  89,
  199,
  135,
  196,
  192,
  174,
  16,
  147,
  131,
  241,
  135,
  209,
  141,
  121,
  218,
  157,
  251,
  41,
  43,
  229,
  189,
  79,
  74,
  73,
  203,
  38,
  10,
  225,
  22,
  159,
  68,
  40,
  178,
  33,
  77,
  56,
  45,
  239,
  47,
  26,
  48,
  164,
  220,
  229,
  77,
  11,
  146,
  91,
  234,
  0,
  222,
  21,
  9,
  189,
  92,
  8,
  48,
  21,
  219,
  88,
  148,
  231,
  146,
  23,
  206,
  174,
  143,
  102,
  244,
  158,
  218,
  170,
  16,
  40,
  217,
  41,
  193,
  180,
  163,
  195,
  189,
  243,
  165,
  124,
  168,
  64,
  88,
  48,
  31,
  43,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  19,
  94,
  101,
  9,
  254,
  49,
  236,
  93,
  96,
  23,
  118,
  181,
  46,
  30,
  41,
  236,
  48,
  44,
  15,
  112,
  137,
  187,
  108,
  11,
  230,
  43,
  96,
  111,
  69,
  50,
  153,
  25,
  204,
  129,
  129,
  113,
  41,
  52,
  239,
  50,
  191,
  209,
  143,
  20,
  213,
  216,
  45,
  5,
  231,
  59,
  177,
  9,
  196,
  52,
  186,
  84,
  74,
  53,
  53,
  208,
  113,
  74,
  25,
  47,
  136,
  9,
  246,
  57,
  166,
  7,
  252,
  165,
  231,
  133,
  67,
  159,
  89,
  40,
  185,
  227,
  220,
  49,
  214,
  153,
  188,
  68,
  30,
  142,
  194,
  8,
  20,
  25,
  249,
  80,
  147,
  31,
  161,
  87,
  175,
  54,
  150,
  94,
  83,
  148,
  106,
  110,
  69,
  205,
  74,
  58,
  128,
  93,
  13,
  63,
  58,
  119,
  119,
  156,
  38,
  59,
  157,
  102,
  121,
  158,
  173,
  155,
  207,
  7,
  129,
  32,
  221,
  160,
  2,
  15,
  131,
  249,
  95,
  54,
  190,
  51,
  37,
  210,
  75,
  10,
  123,
  164,
  170,
  220,
  46,
  2,
  32,
  0,
  126,
  162,
  161,
  23,
  118,
  254,
  8,
  8,
  145,
  202,
  133,
  199,
  119,
  206,
  57,
  43,
  71,
  250,
  177,
  202,
  247,
  247,
  49,
  208,
  24,
  55,
  134,
  206,
  167,
  14,
  195,
  5,
  67,
  75,
  229,
  119,
  93,
  216,
  75,
  48,
  129,
  127,
  109,
  132,
  109,
  219,
  168,
  23,
  159,
  8,
  162,
  147,
  15,
  247,
  240,
  86,
  108,
  80,
  248,
  240,
  65,
  159,
  237,
  247,
  215,
  190,
  191,
  70,
  240,
  218,
  95,
  15,
  139,
  84,
  196,
  177,
  252,
  158,
  196,
  233,
  173,
  21,
  59,
  139,
  120,
  126,
  241,
  79,
  176,
  156,
  21,
  225,
  98,
  163,
  218,
  200,
  210,
  106,
  88,
  71,
  32,
  119,
  134,
  30,
  248,
  17,
  160,
  55,
  121,
  168,
  124,
  85,
  5,
  232,
  156,
  11,
  224,
  89,
  116,
  78,
  181,
  45,
  120,
  198,
  223,
  203,
  156,
  189,
  160,
  140,
  117,
  105,
  10,
  53,
  212,
  37,
  140,
  202,
  224,
  95,
  204,
  114,
  5,
  234,
  227,
  19,
  84,
  3,
  218,
  83,
  80,
  10,
  207,
  66,
  72,
  41,
  104,
  80,
  210,
  173,
  6,
  147,
  3,
  3,
  204,
  9,
  218,
  43,
  35,
  36,
  5,
  172,
  46,
  169,
  251,
  184,
  212,
  165,
  201,
  147,
  253,
  107,
  135,
  14,
  26,
  9,
  80,
  245,
  138,
  84,
  45,
  246,
  75,
  105,
  226,
  144,
  160,
  229,
  102,
  4,
  232,
  113,
  13,
  47,
  85,
  223,
  168,
  20,
  205,
  28,
  186,
  82,
  226,
  253,
  139,
  166,
  67,
  97,
  144,
  21,
  186,
  35,
  159,
  158,
  228,
  38,
  196,
  12,
  95,
  157,
  154,
  2,
  142,
  121,
  143,
  6,
  8,
  179,
  106,
  157,
  155,
  217,
  18,
  101,
  196,
  132,
  72,
  190,
  95,
  68,
  239,
  44,
  137,
  58,
  243,
  46,
  35,
  108,
  214,
  53,
  55,
  219,
  85,
  27,
  6,
  120,
  27,
  234,
  122,
  190,
  156,
  185,
  136,
  22,
  96,
  41,
  175,
  222,
  2,
  99,
  20,
  67,
  69,
  129,
  29,
  135,
  146,
  85,
  144,
  5,
  117,
  158,
  117,
  230,
  133,
  35
];
export const circuit = Object.freeze({
  circuit: circuitFn,
  config,
  defaultInputs,
  vk
});