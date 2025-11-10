#!/usr/bin/env sh
set -e
set -x  # debug output

npm run build

echo "----- LIST dist BEFORE pushing -----"
ls -la dist

cd dist
echo > .nojekyll

git init
git add -A
git commit -m "deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git log --oneline -1
git remote add origin git@github.com:evalp17/mod11.git
git remote -v

git push -f origin HEAD:gh-pages
cd -
