# fast-yes
A fast implementation of yes utility in Node.js

# Getting Started
Install `fast-yes`:
```
npm install -g fast-yes
```
Install `pv`:
```
sudo apt-get install pv
```
or on Mac:
```
brew install pv
```

## Testing performance
run:
```
fast-yes | pv > /dev/null
```

Alternatively you can test against any character:
```
fast-yes hello | pv > /dev/null
```