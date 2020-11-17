# Cache interop

[![codecov](https://codecov.io/gh/soluble-io/tci/branch/main/graph/badge.svg)](https://codecov.io/gh/soluble-io/tci)

Collection of cache adapters for nodejs.   

## Features

- [x] Simple but powerful API.
- [x] Easily substitute any adapter.
- [x] Quickly write your own adapter.
- [x] Written in typescript.
- [x] Fully tested with e2e tests.

## Adapters

| package                 | target | description                      |
|-------------------------|--------|---------------------------------------|
| [@soluble/cache-interop](./packages/cache-interop) | `node`,`browser` | Interoperability interfaces & contracts  |
| [@soluble/cache-ioredis](./packages/cache-ioredis) | `node` | Adapter for node [ioredis](https://github.com/luin/ioredis) driver |

  
## Structure

This monorepo holds the various adapters, the contracts for interoperability and the e2e tests.

```
./packages
 ├── cache-interop 
 │   └── # @soluble/cache-interop: cache interoperability contracts #
 ├── cache-ioredis
 │   └── # @soluble/cache-ioredis: ioredis adapter implementation #
 └── cache-e2e-tests
     └── # e2e test suite for all adapters #
```

### Inspiration

- [PSR-6](https://www.php-fig.org/psr/psr-6/) - PHP Cache interface standard recommendation.
- [PSR-16](https://www.php-fig.org/psr/psr-6/) - PHP SimpleCache interface standard recommendation.
- [Symfony cache](https://github.com/symfony/cache) - Symfony cache component. 
- [Node-cache-manager](https://github.com/BryanDonovan/node-cache-manager) - Flexible NodeJS cache module.
- [C# getOrSet](https://csharp.hotexamples.com/examples/Microsoft.Framework.Caching.Memory/MemoryCache/GetOrSet/php-memorycache-getorset-method-examples.html) - C# Memory::getOrSet() method.

### Aknowledgements

- [microbundle](https://github.com/developit/microbundle) - Zero-configuration bundler for tiny modules. 
- [node-testcontainers](https://github.com/testcontainers/testcontainers-node) - Ephemeral docker instances to facilitate e2e on various services (redis...)


