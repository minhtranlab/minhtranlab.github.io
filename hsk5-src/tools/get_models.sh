#!/bin/bash
# Downloads the three voice models (about 500 MB) + the speech recogniser used by audit_voice.py (about 300 MB) into $HSK5_MODELS (default ~/hsk5-models). Needs internet access to github.com.
set -e
M="${HSK5_MODELS:-$HOME/hsk5-models}"; mkdir -p "$M"; cd "$M"
R=https://github.com/k2-fsa/sherpa-onnx/releases/download
[ -d matcha-icefall-zh-baker ] || { curl -L -o m.tar.bz2 $R/tts-models/matcha-icefall-zh-baker.tar.bz2 && tar xjf m.tar.bz2 && rm m.tar.bz2; }
[ -d kokoro-multi-lang-v1_1 ] || { curl -L -o k.tar.bz2 $R/tts-models/kokoro-multi-lang-v1_1.tar.bz2 && tar xjf k.tar.bz2 && rm k.tar.bz2; }
[ -f vocos-22khz-univ.onnx ] || curl -L -o vocos-22khz-univ.onnx $R/vocoder-models/vocos-22khz-univ.onnx
# Chinese recogniser with timestamps (phiếu #14: audit_voice.py / voicefix.py check where the last syllable ends)
[ -d sherpa-onnx-zipformer-multi-zh-hans-2023-9-2 ] || { curl -L -o z.tar.bz2 $R/asr-models/sherpa-onnx-zipformer-multi-zh-hans-2023-9-2.tar.bz2 && tar xjf z.tar.bz2 && rm z.tar.bz2; }
echo "models ready in $M"
