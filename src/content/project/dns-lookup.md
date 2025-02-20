---
title: 'DNS Lookup'
description: 'wanted to see if I could it'
pubDate: 'Apr 23 2023'
# heroImage:
#     url: '/blog-placeholder-about.jpg'
#     alt: 'GitHub wallpaper'
# platform: Web
stack: ['python']
# website: https://github.com/kirontoo/astro-theme-cody
github: https://github.com/arjunhm/dns-lookup
# order: 2
---

# Overview

DNS server that can be accessed via the `dig` command.  


## Installation

Install the necessary packages by running  
```
pip install -r requirements.txt
```

## Configuration

##### settings.py
This file contains `HOST` and `PORT` values. Set it to `127.0.0.1` and `53` (since default DNS port is 53)  

##### dns_to_json.sh  
Creates `<domain>.json` JSON list of DNS records for a particular domain of a particular record type.  
Edit the `recordtype` and `domain` and then run the file.  
Copy the contents of this file to `zones/dns.json`  

## Usage

Start the DNS server by running  
```
sudo python dns.py
```  
The `sudo` command is required since the program's UDP socket will be running on the reserved port 53.  

Open the terminal and run the `dig` command  
`dig <domain> @127.0.0.1`  
`dig <record-type> <domain> @127.0.0.1`  

Example: `dig google.com @127.0.0.1`  
Example: `dig MX google.com @127.0.0.1`  

> NOTE: Currently only A type records are supported.

## To Do
[ ] Replace `zones/dns.json` with a [Zone File](https://docs.oracle.com/en-us/iaas/Content/DNS/Reference/formattingzonefile.htm)  
[ ] Add support for other record types (MX, CNAME, etc)  