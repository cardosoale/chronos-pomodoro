#!/bin/bash

echo "🔍 Limpando cache do ESLint..."
npx eslint --cache --ext .ts,.tsx . --fix || true

echo "🛠 Formatando código com Prettier..."
npx prettier src/**/*.ts src/**/*.tsx --write

echo "✅ Reformat finalizado!"