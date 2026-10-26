#!/bin/sh
set -e
STASH=".admin-stash"
rm -rf "$STASH"
mkdir -p "$STASH"
mv "app/(admin)" "$STASH/admin"
mv "app/api/keystatic" "$STASH/api-keystatic"
restore() {
  mv "$STASH/admin" "app/(admin)" 2>/dev/null || true
  mv "$STASH/api-keystatic" "app/api/keystatic" 2>/dev/null || true
  rm -rf "$STASH"
}
trap restore EXIT
NEXT_OUTPUT=export npx next build
