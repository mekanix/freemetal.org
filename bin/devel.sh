#!/bin/sh


BIN_DIR=`dirname $0`
. "${BIN_DIR}/common.sh"
setup

echo "Frontend"
echo "========"
env BACKEND_URL="https://freemetal.org" npm run dev -- --host 0.0.0.0
