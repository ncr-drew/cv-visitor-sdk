# CV Node.js SDK

This is a sdk for accessing the CV store database, as well as functions for formatting the visitors cart and accessing prices of items.

## Install

Install via npm

```
npm i @ncr/cv-visitor-sdk
```

## Usage

Import the sdk into your js file

```
import cvVisitorSDK from '@ncr/cv-visitor-sdk';
```

or individual functions

```
import { Database } from '@ncr/cv-visitor-sdk';
```

## Init database access

To access the database service, pass in a configurations object to the Database constructor.

```
const db = new Database({
  appKey: '8a808f29602bec9c01621f44543c023b',
  nepUnit: '5514f8f260a047aaaa2f68524d748c97',
});
```
