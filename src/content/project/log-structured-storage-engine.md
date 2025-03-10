---
title: 'Log Structured Storage Engine'
description: 'implementation of LSM trees'
pubDate: 'May 30 2024' 
stack: ['go', 'db']
github: https://github.com/arjunhm/lsm-storage
# order: 2
---

# Overview
A log-structured filesystem is a file system in which data and metadata are written sequentially to a circular buffer, called a log.


## MemTable
in-memory. append only. all operations go here.  
keep it simple for now. like array of K-V pairs. implement skiplist later.  
flush to disk once size exceeds limit.  

#### Attributes
- size: the current size of the memtable
- limit: the max size it can accomodate.
- entries: list of key-value pairs

#### Operations
- get(kv): returns kv pair if found, else error.
- put(kv): appends key-value pair. updates size. if `size` > `limit`, flush.
- delete(kv): appends key-value pair but marks as deleted. calls `put(kv)`.
- clear(): clears the contents of memtable.
- flush(): flushes contents of memtable to disk, and calls `clear()`.

## Block
contains KV-pairs. limited to 4KB.  

#### Attributes
- header: holds freespace offset and other metadata
- data: byte array of key-value pairs. `<key-size, val-size, key-data, val-data>`.

#### Operations
- get(offset, key): fetches value for a given key

## SSTable
append-only immutable page.  unsorted for now.  
merge with other SSTable once condition is met (determine condition later).  
has its own index. maps key to byte offset of value.  

#### Attributes
- header: size of SSTable + other metadata
- index: maps key to byte offset
- blocks: array of `Block`
- file: file on disk

#### Operations
- create(data): creates file on disk with data. builds index.
- write(): writes contents to disk
- read(): loads data from disk
