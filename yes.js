const os = require('os');
const { Readable } = require('stream');

class YesStream extends Readable {
  constructor(repeat) {
    super();

    this._repeat = repeat;
    this._cachedAllocations = new Map();
  }

  allocateBuffer(bufferSize) {
    this._cachedAllocations.set(bufferSize, Buffer.alloc(bufferSize, `${this._repeat}${os.EOL}`));
  }

  _read(size) {
    const bufferSize = (size % 2 && (this._repeat.length % 2))?size-1:size;
    if (!this._cachedAllocations.has(bufferSize)) this.allocateBuffer(bufferSize);
    this.push(this._cachedAllocations.get(bufferSize));
  }
}

module.exports = YesStream;