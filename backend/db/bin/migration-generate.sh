#!/bin/sh
if [ $# -ne 1 ];then
    echo "Usage: $0 \$MIGRATION_FILE_NAME";
    exit 1
fi
typeorm -d db/migrationDataSource.js migration:generate -o "db/migrations/$1"
