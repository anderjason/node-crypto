# @anderjason/node-crypto

## Installation

`npm install --save @anderjason/node-crypto`

## API Reference

### EncryptedData

`TODO`

### SaltedHash

If you create multiple SaltedHash instances with the same input value, none of the SaltedHash instances will be equal. SaltedHash is useful for storing hashes of passwords and similar secret data.

### SecretKey

`TODO`

### UniqueId

`TODO`

### UnsaltedHash

If you create multiple UnsaltedHash instances with the same input value, all of those UnsaltedHash instances will be equal. UnsaltedHash is useful for storing a compact string that represents a large value. For example, you might want to compare a file on disk to its previously hashed value to see if the file has changed. UnsaltedHash should not be used for passwords or other secret data.
