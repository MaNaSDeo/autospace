`pnpm add "@autospace/sample-lib@workspace:*"` - This will be the way to install dependencies from local library

````"scripts": {
    "format": "prettier \"{apps,libs}/**/*.{ts,tsx,js,json}\" --ignore-path .gitignore",
    "format:check": "pnpm format --check",
    "format:write": "pnpm format --write"
  }```

1. It will target all the ts, tsx, js or json page, inside apps & libs folder. And will ignore everything inside .gitignore.
2. It will check everything based on prettier format.
3. It will
````
