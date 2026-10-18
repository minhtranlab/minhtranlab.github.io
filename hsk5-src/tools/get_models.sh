#!/bin/bash
# Downloads the three voice models (about 500 MB) into $HSK5_MODELS (default ~/hsk5-models). Needs internet access to github.com.
set -e
M="${HSK5_MODELS:-$HOME/hsk5-models}"; mkdir -p "$M"; cd "$M"
R=https://github.com/k2-fsa/sherpa-onnx/releases/download
[ -d matcha-icefall-zh-baker ] || { curl -L -o m.tar.bz2 $R/tts-models/matcha-icefall-zh-baker.tar.bz2 && tar xjf m.tar.bz2 && rm m.tar.bz2; }
[ -d kokoro-multi-lang-v1_1 ] || { curl -L -o k.tar.bz2 $R/tts-models/kokoro-multi-lang-v1_1.tar.bz2 && tar xjf k.tar.bz2 && rm k.tar.bz2; }
[ -f vocos-22khz-univ.onnx ] || curl -L -o vocos-22khz-univ.onnx $R/vocoder-models/vocos-22khz-univ.onnx
echo "models ready in $M"
