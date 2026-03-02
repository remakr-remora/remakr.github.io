#!/bin/sh
# 사용자 설치 gem 경로 우선 (gem install bundler --user-install 한 경우)
export PATH="$HOME/.gem/ruby/2.6.0/bin:$PATH"
bundle exec jekyll serve --incremental

## Or
# jekyll serve --port 4000
