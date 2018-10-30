# CV Node.js SDK

This is a sdk for accessing the CV store database, as well as functions for formatting the visitors cart and accessing prices of items.

## Install

First, add the `CXD` npm registry to your `npmrc` file if you haven't already.

```
npm config set @cxd:registry http://nexuspro.ncr.com/nexus/content/repositories/cxd-npm
```

Then install the sdk, along with the peer dependency `isomorphic-unfetch`.

```
npm i @cxd/cv-node-sdk isomorphic-unfetch
```

## Usage

Import the sdk into your js file

```
import cvNodeSDK from '@cxd/cv-node-sdk';
```

or individual functions

```
import { Database } from '@cxd/cv-node-sdk';
```

## Init database access

To access the database service, pass in a configurations object to the Database constructor.

```
const db = new Database({
  appKey: '8a808f29602bec9c01621f44543c023b',
  nepUnit: '5514f8f260a047aaaa2f68524d748c97',
});
```
