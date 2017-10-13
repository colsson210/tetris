#!/bin/sh
convert -resize 400x400 -delay 10 -loop 0 `find $1 | grep -i '\.svg$' | sort | awk '{ print length, $0 }' | sort -n -s | cut -d" " -f2-` $2
